import React from 'react'
import Logo from '../components/Logo';

export default function topics() {
    const topics = ["Biology", "Biology","Biology","Biology","Biology","Biology","Biology","Biology","Biology",];

  return (
    <div>
        <Logo/>
        <p>Educational Queries</p>
        <button>Filter</button>

        {topics.map(topic => (
            <div>{topic}</div>
        ))}

    </div>
  )
}
