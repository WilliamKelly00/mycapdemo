import React from 'react'
import Logo from '../components/Logo'

export default function signin() {

  return (
    <div>
      <Logo/>
        <form>
        <label>
            Username:
            <input type="text" name="username" />
        </label>
        <label>
            Password:
            <input type="text" name="password" />
        </label>
        <button type="submit">Create Account</button>
        </form>
        <button>Sign in with Google</button>
        <button>Sign in with Facebook</button>
    </div>
  )
}
