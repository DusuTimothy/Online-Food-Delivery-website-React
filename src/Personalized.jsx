import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoPricetagOutline } from 'react-icons/io5'
import { PiHandArrowDownLight } from 'react-icons/pi'

const Personalized = ({ recipes }) => {
  const navigate = useNavigate()
  return (
    <div className='my-20'>
      <h1 className='font-bold'>Personalized recommendations</h1>
      <div className='mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4'>
        {recipes && recipes.slice(15, 19).map((recipe) => (
          <div key={recipe.id} onClick={() => navigate('/checkout', { state: { recipe } })} role="button" tabIndex={0} className='p-4 bg-[#F8F8F8] rounded-xl cursor-pointer'>
            <img src={recipe.image} alt={recipe.name} className='w-full h-40 object-cover rounded-lg' />
            <h2 className='mt-4 text-sm font-semibold'>{recipe.name}</h2>
            <div className='text-sm flex my-4'>
              <p className='text-[#808080]'>{recipe.tags[0]}</p>
            </div>

            <div className='flex justify-between text-sm items-center gap-3'>
              <div className='flex gap-1 items-center'>
                <span className='text-xl text-[#FC8019]'>
                  <IoPricetagOutline />
                </span>
                ${recipe.caloriesPerServing}
              </div>

              <div className='flex gap-1 text-sm items-center'>
                <span className='text-xl text-[#FC8019]'>
                  <PiHandArrowDownLight />
                </span>
                {recipe.cookTimeMinutes + recipe.prepTimeMinutes} Mins
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Personalized