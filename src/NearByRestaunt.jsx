import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Fa500Px } from 'react-icons/fa6'
import { PiHandArrowDownLight } from 'react-icons/pi'
import { RxPeople } from 'react-icons/rx'

const NearByRestaunt = ({ recipes }) => {


  return (
    <div className='flex items-center justify-between mt-20'>

      {/* <<<<<<<<<<<<<<<<<< Nearby Restaurants >>>>>>>>>>>>> */}

      <div>
        <h1 className='font-bold'>Nearby Restaurants</h1>
        <div className='grid grid-cols-2 gap-5 mt-6' >
          {recipes && recipes.slice(0, 4).map((recipe) => (
            <div key={recipe.id} className='p-4 bg-[#F8F8F8] rounded-xl'>

              <img src={recipe.image} alt={recipe.name} width={200} className='rounded-lg' />
              <h2 className='mt-4'>{recipe.name}</h2>
              <div className='text-sm flex justify-between my-4'>
                <p className='text-[#808080]'>{recipe.cuisine}</p>
                {recipe.rating > 4.5 ? (
                  <p className='flex items-center gap-1'>
                    <span className='text-green-500'><FaStar />
                    </span>
                    {recipe.rating}
                  </p>) : (
                  <p className='flex items-center gap-1'>
                    <span className='text-[#FC8019]'><FaStar />
                    </span>
                    {recipe.rating}
                  </p>)
                }
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-1 text-sm items-center'>
                  <span className='text-2xl text-[#FC8019]'>
                    <PiHandArrowDownLight />
                  </span>
                  {recipe.cookTimeMinutes + recipe.prepTimeMinutes} Mins
                </div>

                <div className='flex gap-1 text-sm items-center'>
                  <span className='text-xl text-[#FC8019]'>
                    <RxPeople />
                  </span>
                  {recipe.caloriesPerServing} for two
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <<<<<<<<<<<<<<<<<< Recommended Food Items >>>>>>>>>>>>> */}
      <div>
        <h1 className='font-bold'> Recommended Food Items </h1>
        <div className='grid grid-cols-2 gap-5 mt-6' >
          {recipes && recipes.slice(4, 8).map((recipe) => (
            <div key={recipe.id} className='p-4 bg-[#F8F8F8] rounded-xl'>

              <img src={recipe.image} alt={recipe.name} width={200} className='rounded-lg' />
              <h2 className='mt-4'>{recipe.name}</h2>
              <div className='text-sm flex justify-between my-4'>
                <p className='text-[#808080]'>{recipe.cuisine}</p>
                {recipe.rating > 4.5 ? (
                  <p className='flex items-center gap-1'>
                    <span className='text-green-500'><FaStar />
                    </span>
                    {recipe.rating}
                  </p>) : (
                  <p className='flex items-center gap-1'>
                    <span className='text-[#FC8019]'><FaStar />
                    </span>
                    {recipe.rating}
                  </p>)
                }
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-1 text-sm items-center'>
                  <span className='text-2xl text-[#FC8019]'>
                    <PiHandArrowDownLight />
                  </span>
                  {recipe.cookTimeMinutes + recipe.prepTimeMinutes} Mins
                </div>

                <div className='flex gap-1 text-sm items-center'>
                  <span className='text-xl text-[#FC8019]'>
                    <RxPeople />
                  </span>
                  {recipe.caloriesPerServing} for two
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


  )
}

export default NearByRestaunt