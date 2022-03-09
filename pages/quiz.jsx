import React from 'react'
import { useState, useEffect } from "react"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function quiz() {
    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [points, setPoints] = useState(0);

    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    const pickAnswer = (e) => {
        e.preventDefault();
        let userAnswer = e.target.elements.answers.value;
        if (quiz[number].answer === userAnswer) setPoints(points + 50);
        setNumber(number + 1);
    }

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&category=18&type=multiple`)
            .then(res => res.json())
            .then(data => {
                setQuiz(data.results.map(item => (
                    {
                        question: item.question,
                        options: shuffle([...item.incorrect_answers, item.correct_answer]),
                        answer: item.correct_answer
                    }
                )));
            })
            .catch(err => console.error(err))
    }, []);


  return (
    <div>
        {quiz[number] &&
        <form onSubmit={pickAnswer}>
        <h1>{quiz[number].question}</h1>
        <h2>Points: {points}</h2>
        <CountdownCircleTimer
            isPlaying
            duration={60}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
            {quiz[number].options.map((item, index) =>(
                <label key={index}>
                    <input type="radio" name="answers" key={index} value={item}></input>
                    {item}
                </label>
            ))}
        <button type="submit">Submit</button>
        </form>
        }

    </div>
  )
}
