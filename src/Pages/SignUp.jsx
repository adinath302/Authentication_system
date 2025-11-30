import React, { useState } from 'react'
import signUp from '../assets/women.png'
import logo from '../assets/company_icon.png'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import Login from './Login'
import { motion } from 'framer-motion'
const SignUp = ({ setIsloading, isloading, setHasAccountData }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [erros, seterrors] = useState({})
  const [Ishidden, setIsHidden] = useState(true)

  const Validateform = () => {
    const newErros = {}

    if (password !== confirmPassword) {
      newErros.password = 'Password and Confirm Password do not match'
    }
    if (password.length < 6) {
      newErros.password = 'Password must be at least 6 characters long'
    }
    if (!email) {
      newErros.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErros.email = 'Invalid email format'
    }
    if (name.trim() === '') {
      newErros.name = 'Name cannot be empty'
    }
    seterrors(newErros)
    return Object.keys(newErros).length === 0
  }

  const Handlesubmit = e => {
    e.preventDefault()
    if (Validateform()) {
      localStorage.setItem(
        'signupData',
        JSON.stringify({ email, name, password })
      )
      setIsSignedUp(true)
    }
  }

  if (isSignedUp) {
    return <Login isloading={isloading} setIsloading={setIsloading} /> // or use React Router navigation
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className='grid grid-cols-1 xl:grid-cols-[55%_45%] templet-rows-2 h-screen'
    >
      <div className='shadow-lg shadow-gray-600 p-10 z-'>
        {/* logo */}
        <div className=' flex flex-col items-center '>
          <img src={logo} alt='' className='h-[100px] ' />
          <p className='font-semibold text-md text-gray-700'>
            Sign up into your a ccount
          </p>
        </div>
        {/* SignUp form */}
        <form action='' className='mt-10 gap-10' onSubmit={Handlesubmit}>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <label htmlFor='' className='flex flex-col gap-1 text-gray-700'>
              Name:
              <input
                value={name}
                required
                type='text'
                onChange={event => setName(event.target.value)}
                placeholder='Enter your name ....'
                className='p-2 bg-gray-200 rounded-md focus:outline-none '
              />
            </label>
            {erros.name && <p>{erros.name}</p>}

            <label htmlFor='' className='flex flex-col gap-1 text-gray-700'>
              Email id:
              <input
                required
                value={email}
                onChange={event => setEmail(event.target.value)}
                type='email'
                placeholder='info@xyz.com'
                className='p-2 bg-gray-200 rounded-md focus:outline-none '
              />
            </label>
            {erros.email && <p>{erros.email}</p>}

            <label htmlFor='' className='flex flex-col gap-1 text-gray-700'>
              Password:
              <div className='p-2 bg-gray-200 rounded-md flex items-center justify-between'>
                <input
                  value={password}
                  required
                  onChange={event => setPassword(event.target.value)}
                  type={Ishidden ? 'password' : 'text'}
                  placeholder='xxxxxxxxxx'
                  className=' focus:outline-none'
                />
                <div onClick={() => setIsHidden(!Ishidden)}>
                  {Ishidden ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </label>
            {erros.password && <p>{erros.password}</p>}

            <label htmlFor='' className=' flex-col gap-1 text-gray-700'>
              Confirm Password:
              <div className='p-2 bg-gray-200 rounded-md flex justify-between items-center'>
                <input
                  required
                  onChange={event => setConfirmPassword(event.target.value)}
                  value={confirmPassword}
                  type={Ishidden ? 'password' : 'text'}
                  placeholder='xxxxxxxxxx'
                  className=' focus:outline-none  '
                />
                <div onClick={() => setIsHidden(!Ishidden)}>
                  {Ishidden ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </label>
          </div>
          <button
            type='submit'
            className='p-2 mt-8 px-15 text-white font-semibold rounded-xl shadow-md hover:shadow-xl cursor-pointer hover:scale-105 transition-all shadow-cyan-500/50 bg-blue-900'
          >
            Sign Up
          </button>
        </form>
      </div>

      <div className='p-10 hidden xl:flex  justify-center items-center bg-gray-50'>
        <img src={signUp} alt='' className='w-[993px] h-[418px]' />
      </div>
    </motion.div>
  )
}

export default SignUp
