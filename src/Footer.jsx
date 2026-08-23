import React from 'react'
import { FaInstagram, FaInstagramSquare } from 'react-icons/fa'
import { FiFacebook, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='text-white font-bold bg-[#FC8019] py-10'>
      <div className='flex justify-between items-center mx-25'>
        <img src="src/assets/fitMeLogo.png" alt="logo" width={100} />
        <div className='flex gap-15 text-sm'>
          <span>About</span>
          <span>Delivery</span>
          <span>Help & Support</span>
          <span>T&C</span>
        </div>
        <div className='font-light'>Contact
          <strong className='ml-2 font-bold'> +91 1234567899 </strong>
        </div>
      </div>

      <div className='flex justify-center gap-5 mt-5'>
        <FiFacebook />
        <FaInstagram />
        <FiTwitter />
      </div>
    </div>

  )
}

export default Footer