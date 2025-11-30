import React, { useEffect, useState } from 'react'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Welcome from './Pages/Dashboard'

const App = () => {
  const [isloading, setIsloading] = useState(false)
  const [hasAccountData, setHasAccountData] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem('signupData')
    if (data) {
      setHasAccountData(true)
    }
  }, [])

  const handleAuthStatusChange = () => {
    setHasAccountData(status)
  }

  if (hasAccountData) {
    return <Welcome setHasAccountData={handleAuthStatusChange} />
  }
  return (
    <div>
      <SignUp
        setIsloading={setIsloading}
        isloading={isloading}
        setHasAccountData={handleAuthStatusChange}
      />
    </div>
  )
}

export default App
