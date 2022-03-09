import React from 'react'
import Logo from '../components/Logo'
import Sidebar from '../components/Sidebar';
import styles from '../styles/Profile.module.css'

export default function profile() {
    let x = 12512512;
    let y = 25125123;
  return (
    <div>
      <Sidebar/>
        <Logo/>
        <div className={styles.pic}>Profile pic</div>

        <div className={styles.profileholder}>
          <p>{x} Points = {y} TorE Tokens</p>
          <p>{y} TorE Tokens = $702,215 USD</p>
          <p>Buy TorE</p>
          <p>Sell TorE</p>
          <p>Truth or Err</p>
          <p>$494M Market Cap</p> <p>$18.6M Daily Volume</p> <p>Ranked #198!</p>
          <p>TorE Exchange</p>
        </div>


    </div>
  )
}
