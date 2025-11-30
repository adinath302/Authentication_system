import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const Welcome = () => {
  const [data, setData] = useState()
  const HandlelogOut = () => {
    localStorage.removeItem('signupData')
    window.location.reload()
  }
  useEffect(() => {
    const signupData = localStorage.getItem('signupData')
    if (signupData) {
      const data = JSON.parse(signupData)
      setData(data)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className='items-center h-screen text-2xl flex justify-center font-semibold'>
        Welcome {data ? data.name : 'User'}!
      </h1>
      <button
        className='absolute right-3 top-3 p-2 rounded-xl bg-amber-400 cursor-pointer'
        onClick={HandlelogOut}
      >
        Log out
      </button>
    </motion.div>
  )
}

export default Welcome
