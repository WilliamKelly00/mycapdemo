import React from 'react'
import Logo from '../components/Logo';
import Link from 'next/link';
import styles from '../styles/Topic.module.css'


export default function topics() {
    const topics = ["Books", "Film","Music","Musicals & Theatres","Television","Video Games",
    "Board Games","Science & Nature","Computers","Math","Mythology", "Sports", "Geography", "History", "Politics", "Art", "Celebrities",
     "Animals", "Vehicles", "Comics"];



  return (
    <div>
        <Logo/>
        <p className={styles.title}>Educational Queries</p>
        <button className={styles.filter}>Filter</button>

        {topics.map((topic, idx) => (
          // link to quiz
          <Link href="/quiz" key={idx}>
            <button className={styles.topicbubble} key={idx}>{topic}</button>
          </Link>
        ))}

    </div>
  )
}
