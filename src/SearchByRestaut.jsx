import { TbArrowsCross } from 'react-icons/tb'

const SearchByRestaut = () => {
  return (
    <div className='bg-[#FC8019] my-20'>
      <div className='text-white font-bold md:flex items-center gap-5 py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <p className='md:w-70 flex items-center gap-2'>
          Search by Restaurant
          <span><TbArrowsCross /></span>
        </p>

        <input
          type="search"
          placeholder='Enter your delivery location'
          className="md:w-full pl-5 py-2 border border-white text-sm rounded-lg outline-none hover:shadow-md hover:border-none "
        />
        <button
          className='bg-black text-white font-medium text-sm px-4 py-2 rounded-lg md:w-40'>Search Now
        </button>

      </div>
    </div>
  )
}

export default SearchByRestaut