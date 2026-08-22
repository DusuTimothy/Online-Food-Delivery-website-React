import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { LiaShoppingBagSolid } from 'react-icons/lia'

const Nav = () => {
  return (
    <div className='flex justify-between items-center'>
      <img src="src/assets/fitMeLogo.png" alt="fit-me-logo" width={90} />
      <div className='flex gap-5 items-center'>
        <div className="relative flex items-center">
          <input
            type="search"
            placeholder='Enter item or restuarant you are looking for'
            className="lg:w-92 pl-5 pr-10 py-2 border border-[#ccc] text-sm rounded-lg outline-none hover:shadow-md hover:border-none "
          />
          <span className="absolute right-3 pointer-events-none  text-gray-400 rotate-90 "><FaSearch size={15} /></span>
        </div>
        <span className='text-2xl'><LiaShoppingBagSolid /></span>
        <button className='bg-black text-white font-medium text-sm px-4 py-2 rounded-lg'>Sign in</button>
      </div>
    </div>
  )
}

export default Nav