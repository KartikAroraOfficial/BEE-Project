import React from 'react'

const Login = () => {
  return (
    <form>
        <span>Username</span> <input type="text" name="username" />
        <span>Password</span> <input type="password" name="password" />
    </form>
  )
}

export default Login