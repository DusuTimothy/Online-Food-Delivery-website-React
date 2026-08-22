import React from 'react'

const SearchByRestaut = () => {
  return (
    <div className='bg-[#FC8019] my-20'>
      <div className='text-white font-bold flex items-center gap-5 py-10 mx-60'>
        <p className='w-70'>
          Search by Restaurant
          <span></span>
        </p>

        <input
          type="search"
          placeholder='Enter your delivery location'
          className="w-full pl-5 py-2 border border-white text-sm rounded-lg outline-none hover:shadow-md hover:border-none "
        />
        <button
          className='bg-black text-white font-medium text-sm px-4 py-2 rounded-lg w-40'>Search Now
        </button>

      </div>
    </div>
  )
}

export default SearchByRestaut