import React from 'react'

const Hero = () => {
  return (
    <div className='mt-20 lg:flex gap-10 items-center'>
      <div className=''>
        <h1 className=' font-bold items-center text-4xl'>
          Premium <strong className='text-[#FC8019]'>quality <br /></strong>
          <span className='flex gap-2 py-3'>Food for your <img src="/banana.png" width={50} alt="banana" className='h-10'/><strong className='text-[#FC8019]'>healthy</strong></span>
          <span className='flex gap-2'><img src="/apple.png" alt="apple" width={50} height={5} />
            <strong className='text-[#FC8019]'>& Daily Live</strong></span>
        </h1>
        <p className='opacity-80 my-4 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam fugit consequuntur, labore quasi sed? Itaque omnis neque exercitationem maiores sapiente consectetur provident quisquam sint soluta, quo recusandae animi suscipit!
        </p>
        <div className='flex gap-4'>
          <input
            type="search"
            placeholder='Enter your delivery location'
            className="w-full pl-5 border border-[#ccc] text-sm rounded-lg outline-none hover:shadow-md hover:border-none "
          />
          <button
            className='bg-black text-white font-medium text-sm px-4 py-2 rounded-lg w-40'>Get Started
          </button>
        </div>
        <p className='my-6'>Popular cities in India</p>
        <div className='flex gap-4'>
          <span>Hyderabad</span>
          <span className='text-[#FC8019]'>Chennai</span>
          <span>Mumbai</span>
          <span className='text-[#FC8019]'>Bangalore</span>
          <span>Delhi</span>
          <span className='text-[#FC8019]'>Kolkata</span>
        </div>
      </div>


      <img src="/hero1.png" alt="hero-png-1" width={300} className='my-6' />
      <img src="/hero2.png" alt="hero-png-2" width={250} />

      <div className='absolute -left-2'>
        <img src="/sideHero.png" alt="hero-side-img" width={100} />
      </div>

    </div>
  )
}

export default Hero