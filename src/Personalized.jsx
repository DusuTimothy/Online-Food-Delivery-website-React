import React from 'react'
import { IoPricetagOutline } from 'react-icons/io5'
import { PiHandArrowDownLight } from 'react-icons/pi'

const Personalized = ({ recipes }) => {
  return (
    <div>
      <div>
        <h1 className='font-bold'> Personalized recommendations </h1>
        <div className='flex justify-between mt-6' >
          {recipes && recipes.slice(15, 19).map((recipe) => (
            <div key={recipe.id} className='p-4 bg-[#F8F8F8] rounded-xl'>

              <img src={recipe.image} alt={recipe.name} width={200} className='rounded-lg object-cover' />
              <h2 className='mt-4'>{recipe.name}</h2>
              <div className='text-sm flex my-4'>
                <p className='text-[#808080]'>{recipe.tags[0]}</p>

              </div>

              <div className='flex justify-between text-sm items-center'>
                <div className='flex gap-1'>
                  <span className='text-2xl text-[#FC8019]'>
                    <IoPricetagOutline />
                  </span>
                  ${recipe.caloriesPerServing}
                </div>

                <div className='flex gap-1 text-sm items-center'>
                  <span className='text-2xl text-[#FC8019]'>
                    <PiHandArrowDownLight />
                  </span>
                  {recipe.cookTimeMinutes + recipe.prepTimeMinutes} Mins
                </div>

              </div>

            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Personalized