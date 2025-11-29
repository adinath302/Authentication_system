import React, { useEffect, useState } from 'react'
import login from '../assets/login_png.png'
import Dashboard from './Dashboard.jsx'
import logo from '../assets/company_icon.png'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'

const Login = () => {
  const [email, Setemail] = useState('')
  const [password, SetPassword] = useState('')
  const [ishidden, SetIsHidden] = useState(true)
  const [isLoggedIn, SetIsLoggedIn] = useState(false)

  const HandleSubmit = e => {
    e.preventDefault()
    if (email !== '' && password !== '') {
      SetIsLoggedIn(true)
    }
  }
  useEffect(() => {
    if (isLoggedIn) {
      ;<Dashboard />
      localStorage.removeItem('signupData')
    }
  }, [isLoggedIn])

  return (
    <div
      className='grid grid-cols-1 xl:grid-cols-[60%_40%]'
      onSubmit={HandleSubmit}
    >
      {/* login image */}
      <div className='bg-gray-50 hidden xl:flex justify-center items-center'>
        <img src={login} alt='' className='h-[785px]' />
      </div>

      <div className='bg-white p-10 items-center'>
        {/*  logo  */}
        <div className='flex flex-col items-center justify-center'>
          <img src={logo} alt='' className='h-[100px]' />
          <p className=' font-semiold text-md text-gray-700'>
            Login into your account
          </p>
        </div>

        {/* login form */}
        <form action='' className='mt-10 gap-10 flex flex-col'>
          <label htmlFor='' className='flex flex-col'>
            Email id :
            <input
              required
              value={email}
              type='email'
              onChange={e => Setemail(e.target.value)}
              placeholder='info@provistechnologies.com'
              className='focus:outline-none p-2 bg-gray-100 rounded-md'
            />
          </label>
          <label htmlFor='' className='flex flex-col'>
            Password :
            <div className='p-2 bg-gray-100 rounded-md flex justify-between items-center'>
              <input
                required
                value={password}
                onChange={e => SetPassword(e.target.value)}
                type={ishidden ? 'password' : 'text'}
                placeholder='Enter your password'
                className='focus:outline-none '
              />
              <div
                onClick={() => SetIsHidden(!ishidden)}
                className='transition-all '
              >
                {ishidden ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </label>
          <p className='underline flex items-center justify-end select-none text-sm cursor-pointer'>
            Forgot password
          </p>
          <button
            type='submit'
            className='px-10 cursor-pointer bg-blue-900 p-2 text-white rounded-xl shadow-md shadow-cyan-500/50 hover:shadow-xl hover:scale-105 transition-all font-semibold'
          >
            Login now
          </button>
          <div className='flex items-center'>
            <div className='border w-full text-gray-400'></div>
            <p className='px-5 text-gray-400 text-sm'>OR</p>
            <div className='border w-full text-gray-400'></div>
          </div>
          <button className='p-2 px-10 ring-1 rounded-xl shadow-sm hover:shadow-xl shadow-gray-700 font-semibold hover:scale-105 transition-all'>
            Signup now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
