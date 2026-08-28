import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom'

const Nav = ({ onSearch, onSignIn, onCart, user }) => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(query.trim())
  }

  return (
    <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
      <img src="/fitMeLogo.png" alt="fit-me-logo" width={90} className='w-22.5 h-auto cursor-pointer' onClick={() => navigate('/')} />

      <div className='flex flex-col gap-3 sm:flex-row sm:items-center md:justify-end md:flex-1'>
        <form onSubmit={handleSubmit} className="relative flex-1 min-w-0 sm:max-w-md md:max-w-xl">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Enter item or restaurant you are looking for'
            className="w-full pl-5 pr-10 py-2.5 border border-[#ccc] text-sm rounded-lg outline-none hover:shadow-md focus:border-[#FC8019]"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 rotate-90"><FaSearch size={15} /></span>
        </form>

        <div className='flex items-center gap-3 justify-end'>
          <button type="button" onClick={onCart} className='text-2xl'><LiaShoppingBagSolid /></button>
          <button onClick={onSignIn} className='bg-black text-white font-medium text-sm px-4 py-2 rounded-lg'>{user ? user.email : 'Sign in'}</button>
        </div>
      </div>
    </div>
  )
}

export default Nav