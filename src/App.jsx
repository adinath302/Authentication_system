import React from 'react'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'

const App = () => {
  if (localStorage.getItem('signupData')) {
    return (
      <div>
        <Login />
      </div>
    )
  }
  return (
    <div>
      <SignUp />
    </div>
  )
}

export default App
