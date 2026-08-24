import React from 'react'
import { FaApple, FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { RxCross2 } from 'react-icons/rx'

const SignUp = () => {
  return (
    <>

      <div className='bg-white  border-[#ebeaea] shadow-2xl rounded-3xl'>
        <div className="flex items-center justify-center rounded-t-3xl shadow py-2 pr-3">
          <span className='ml-auto'>Log in or sign up</span>
          <span className='ml-auto'><RxCross2 /></span>
        </div>
        <div className='px-15'>
          <div className="font-bold text-lg mt-15">Welcome to FitMe</div>
          <form className='grid mt-5'>
            <label className='block mr-auto'> Email address</label>
            <input type="email"
              required
              placeholder='You@example.com'
              className='block border border-gray-300 py-2 pl-3 text-sm rounded-lg mt-2'
            />
            <input type="password"
              required
              placeholder='Type your password'
              className='block border border-gray-300 py-2 pl-3 text-sm rounded-lg mt-3'
            />
            <button className='bg-[#f1eeee] text-gray-400 py-1 mt-4 rounded-lg'>Continue</button>
            <div className='flex items-center py-5'>
              <div className='grow border-t border-gray-300'></div>
              <span className='shrink mx-4 text-gray-400 text-sm font-medium uppercase'>or</span>
              <div className='grow border-t border-gray-300'></div>
            </div>

            <button className='flex items-center justify-center gap-2 py-1 rounded-lg border border-gray-300'>
              <span><FcGoogle /></span>
              <span>Continue with Google</span>
            </button>

            <button className='flex items-center justify-center gap-2 py-1 my-3 rounded-lg border border-gray-300'>
              <span><FaApple /></span>
              <span>Continue with Apple</span>
            </button>

            <button className='flex items-center justify-center gap-2 py-1 mb-15 rounded-lg border border-gray-300'>
              <span className='text-blue-800'><FaFacebook /></span>
              <span>Continue with Facebook</span>
            </button>



          </form>
        </div>
      </div>
    </>

  )
}

export default SignUp