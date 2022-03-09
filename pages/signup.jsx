import React from 'react'
import Logo from '../components/Logo'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Sign.module.css'
import Link from 'next/link'

export default function signin() {

  return (
    <div>
      <Sidebar/>
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
        <button className={styles.login} type="submit">Create account</button>
        <Link href="/signin">
        <button className={styles.login}>Already have an account?</button>
        </Link>
        </form>
        <div className={styles.thirdparty}>
          <button className={styles.google}>Sign up with Google</button>
          <button className={styles.fb}>Sign up with Facebook</button>
        </div>
    </div>
  )
}
