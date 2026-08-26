import { useState } from 'react'
import { FaApple, FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { RxCross2 } from 'react-icons/rx'

const SignUp = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    onLogin({ email })
  }

  return (
    <div className='bg-white border border-[#ebeaea] shadow-2xl rounded-3xl overflow-hidden'>
      <div className="flex items-center justify-between rounded-t-3xl shadow py-3 px-4">
        <span className='text-sm font-medium'>Log in or sign up</span>
        <button type="button" onClick={onClose} className='text-lg'><RxCross2 /></button>
      </div>

      <div className='px-5 sm:px-8'>
        <div className="font-bold text-lg mt-8 sm:mt-10">Welcome to FitMe</div>
        <form onSubmit={handleSubmit} className='grid mt-5'>
          <label className='block mr-auto text-sm text-gray-700'>Email address</label>
          <input type="email"
            required
            value={email}
            onChange={(event) => { setEmail(event.target.value); setError('') }}
            placeholder='You@example.com'
            className='block w-full border border-gray-300 py-2.5 pl-3 text-sm rounded-lg mt-2 outline-none focus:border-[#FC8019]'
          />
          <input type="password"
            required
            minLength={6}
            value={password}
            onChange={(event) => { setPassword(event.target.value); setError('') }}
            placeholder='Type your password'
            className='block w-full border border-gray-300 py-2.5 pl-3 text-sm rounded-lg mt-3 outline-none focus:border-[#FC8019]'
          />
          {error && <p className='text-red-500 text-xs mt-3'>{error}</p>}
          <button type="submit" className='bg-[#f1eeee] text-gray-400 py-2 mt-4 rounded-lg'>Continue</button>

          <div className='flex items-center py-5'>
            <div className='grow border-t border-gray-300'></div>
            <span className='shrink mx-4 text-gray-400 text-sm font-medium uppercase'>or</span>
            <div className='grow border-t border-gray-300'></div>
          </div>

          <button type="button" className='flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-300'>
            <span><FcGoogle /></span>
            <span>Continue with Google</span>
          </button>

          <button type="button" className='flex items-center justify-center gap-2 py-2 my-3 rounded-lg border border-gray-300'>
            <span><FaApple /></span>
            <span>Continue with Apple</span>
          </button>

          <button type="button" className='flex items-center justify-center gap-2 py-2 mb-8 rounded-lg border border-gray-300'>
            <span className='text-blue-800'><FaFacebook /></span>
            <span>Continue with Facebook</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp