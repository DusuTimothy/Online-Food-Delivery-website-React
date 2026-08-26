import React from 'react'
import { FaInstagram, FaInstagramSquare } from 'react-icons/fa'
import { FiFacebook, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='text-white font-bold bg-[#FC8019] py-10'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
        <img src="src/assets/fitmeWhiteLogo.png" alt="logo" width={100} className='w-[100px] h-auto' />

        <div className='flex flex-wrap justify-center gap-4 text-sm sm:gap-6 lg:justify-start'>
          <span>About</span>
          <span>Delivery</span>
          <span>Help & Support</span>
          <span>T&C</span>
        </div>

        <div className='text-center font-light lg:text-left'>Contact
          <strong className='ml-2 font-bold'> +91 1234567899 </strong>
        </div>
      </div>

      <div className='mt-5 flex justify-center gap-5'>
        <FiFacebook />
        <FaInstagram />
        <FiTwitter />
      </div>
    </div>
  )
}

export default Footer