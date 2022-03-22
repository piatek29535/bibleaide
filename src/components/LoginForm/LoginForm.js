import React from 'react'
import "./LoginForm.css"

function LoginForm() {
  return (
      <div className="loginContainerWrapper">
          <h1 className="loginHeader">Witamy w aplikacji BibleAide</h1>
          <div className="formOptions">
              <button className="login">Login</button>
              <button className="register">Register</button>
          </div>
          <form action="/" method='GET' className='loginForm'>
              <label for="login">Login:</label>
              <input type="text" name="login" id="login" />
              <label for="password">Password:</label>
              <input type="text" name="password" id="password" />
              <input type="submit" value="Zaloguj się" />
          </form>
      </div>
  )
}

export default LoginForm;