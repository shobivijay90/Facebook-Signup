import React from 'react'

function Form () {
  return (
    <form>
      <h1>Sign Up</h1>
      <p>Its quick and easy.</p>

      <div className='name-details'>
        <input id='f-name' type='text' placeholder='First name' />
        <input id='l-name' type='text' placeholder='Last name' />
      </div>
      <input
        type='email'
        placeholder='Mobile number or email'
        className='email'
      />
      <input type='password' placeholder='New password' className='pass' />

      <label className='bdy' name='birthday'>
        Birthday
      </label>
      <div className='bdy-drop'>
        <input id='month' type='number' min='1' max='12' />
        <input id='day' type='number' min='1' max='31' />
        <input id='year' type='number' min='1905' max='2019' />
      </div>

      <label className='gender' name='gender'>
        Gender
      </label>
      <div className='gender-radio'>
        <input id='female' type='radio' name='gender' value='female' /> Female
        <input id='male' type='radio' name='gender' value='male' /> Male
        <input id='custom' type='radio' name='gender' value='custom' /> Custom
      </div>
      <p className='policy'>
        By clicking Sign Up, you agree to our <a href="https://www.facebook.com/legal/terms/update" target='new'>Terms</a>, <a href="https://www.facebook.com/about/privacy/update" target="new">Data Policy</a> and <a href="https://www.facebook.com/policies/cookies/" target='new'>Cookies
        Policy</a>. You may receive SMS Notifications from us and can opt out any
        time.
      </p>
      <button type="submit" className='sign-up'>Sign Up</button>
      <hr/>
      <p className='band'><a href="https://www.facebook.com/pages/creation/">Create a Page</a> for a celebrity, band or business.</p>
    </form>
  )
}

export default Form
