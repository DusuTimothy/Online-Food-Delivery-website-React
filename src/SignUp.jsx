import React from 'react'
import { FaApple, FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { RxCross2 } from 'react-icons/rx'

const SignUp = () => {
  return (
    <div className='grid justify-center shadow-lg m-50'>
      <div className="flex items-center justify-between">
        <span>Log in or sign up</span>
        <span className=''><RxCross2 /></span>
      </div>
      <div className="welcome">Welcome to FitMe</div>
      <form className=''>
        <label className='block'> Email address</label>
        <input type="email"
          required
          placeholder='you@example.com'
          className='block'
        />
        <input type="password"
          required
          placeholder='Type your password'
          className='block'
        />
        <button className=''>Continue</button>
        <div className='flex items-center py-5'>
          <div className='grow border-t border-gray-300'></div>
          <span className='shrink mx-4 text-gray-400 text-sm font-medium uppercase'>or</span>
          <div className='grow border-t border-gray-300'></div>
        </div>

        <button className='flex items-center justify-center gap-2 py-1 rounded-lg border border-gray-300'>
          <span><FcGoogle /></span>
          <span>Continue with Google</span>
        </button>

        <button className='flex items-center justify-center gap-2 py-1 rounded-lg border border-gray-300'>
          <span><FaApple /></span>
          <span>Continue with Apple</span>
        </button>

        <button className='flex items-center justify-center gap-2 py-1 rounded-lg border border-gray-300'>
          <span className='text-blue-800'><FaFacebook /></span>
          <span>Continue with Facebook</span>
        </button>



      </form>
    </div>
  )
}

export default SignUp