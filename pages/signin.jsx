import React from 'react'
import Logo from '../components/Logo'
import styles from '../styles/Sign.module.css'

export default function signin() {

  return (
    <div>
      <Logo/>
        <form className={styles.formstyle}>
        <label className={styles.inputbox}>
            Username:
            <input type="text" name="username" />
        </label>
        <label className={styles.inputbox}>
            Password:
            <input type="text" name="password" />
        </label>
        <button className={styles.login} type="submit">Log in</button>
        </form>
        <div className={styles.thirdparty}>
          <button className={styles.google}>Sign in with Google</button>
          <button className={styles.fb}>Sign in with Facebook</button>
        </div>
    </div>
  )
}
