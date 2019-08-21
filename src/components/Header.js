import React from 'react'

function Header () {
  return (
    <header>
      <h1 className="fb">facebook</h1>

      <div className="right-side">

        <div className="flex">
          <label for='email'>Email or Phone</label>
          <input id='email' name='e-mail' type='text' />
        </div>

        <div className="flex">
          <label for='password'>Password</label>
          <input id='password' name='pass' type='text' />
          <a href='https://www.facebook.com/login/identify/?ctx=recover&ars=royal_blue_bar'>
            Forgot Password?
          </a>
        </div>

        <button>Log In</button>

      </div>
    </header>
  )
}

export default Header
