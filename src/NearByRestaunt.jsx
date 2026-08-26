import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { PiHandArrowDownLight } from 'react-icons/pi'
import { RxPeople } from 'react-icons/rx'

const NearByRestaunt = ({ recipes }) => {
  const navigate = useNavigate()
  const [detailsRecipe, setDetailsRecipe] = useState(null)


  return (
    <div className='mt-20 grid gap-8 xl:grid-cols-2'>
      <div>
        <h1 className='font-bold'>Nearby Restaurants</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6'>
          {recipes && recipes.slice(0, 4).map((recipe) => (
            <div key={recipe.id} className='p-4 bg-[#F8F8F8] rounded-xl'>
              <img src={recipe.image} alt={recipe.name} className='w-full h-40 object-cover rounded-lg' />
              <h2 className='mt-4 text-sm font-semibold'>{recipe.name}</h2>
              <div className='text-sm flex justify-between my-4 gap-2'>
                <p className='text-[#808080] truncate'>{recipe.cuisine}</p>
                {recipe.rating > 4.5 ? (
                  <p className='flex items-center gap-1 whitespace-nowrap'>
                    <span className='text-green-500'><FaStar /></span>
                    {recipe.rating}
                  </p>) : (
                  <p className='flex items-center gap-1 whitespace-nowrap'>
                    <span className='text-[#FC8019]'><FaStar /></span>
                    {recipe.rating}
                  </p>)
                }
              </div>
              <div className='flex justify-between gap-2'>
                <div className='flex gap-1 text-xs sm:text-sm items-center'>
                  <span className='text-xl text-[#FC8019]'>
                    <PiHandArrowDownLight />
                  </span>
                  {recipe.cookTimeMinutes + recipe.prepTimeMinutes} Mins
                </div>

                <div className='flex gap-1 text-xs sm:text-sm items-center'>
                  <span className='text-lg text-[#FC8019]'>
                    <RxPeople />
                  </span>
                  {recipe.caloriesPerServing} for two
                </div>
              </div>
              <button type="button" onClick={() => setDetailsRecipe(recipe)} className='mt-4 w-full rounded-lg bg-black py-2 text-sm font-medium text-white'>View details</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className='font-bold'>Recommended Food Items</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6'>
          {recipes && recipes.slice(4, 8).map((recipe) => (
            <div key={recipe.id} className='p-4 bg-[#F8F8F8] rounded-xl'>
              <img src={recipe.image} alt={recipe.name} className='w-full h-40 object-cover rounded-lg' />
              <h2 className='mt-4 text-sm font-semibold'>{recipe.name}</h2>
              <div className='text-sm flex justify-between my-4 gap-2'>
                <p className='text-[#808080] truncate'>{recipe.cuisine}</p>
                {recipe.rating > 4.5 ? (
                  <p className='flex items-center gap-1 whitespace-nowrap'>
                    <span className='text-green-500'><FaStar /></span>
                    {recipe.rating}
                  </p>) : (
                  <p className='flex items-center gap-1 whitespace-nowrap'>
                    <span className='text-[#FC8019]'><FaStar /></span>
                    {recipe.rating}
                  </p>)
                }
              </div>
              <div className='flex justify-between gap-2'>
                <div className='flex gap-1 text-xs sm:text-sm items-center'>
                  <span className='text-xl text-[#FC8019]'>
                    <PiHandArrowDownLight />
                  </span>
                  {recipe.cookTimeMinutes + recipe.prepTimeMinutes} Mins
                </div>

                <div className='flex gap-1 text-xs sm:text-sm items-center'>
                  <span className='text-lg text-[#FC8019]'>
                    <RxPeople />
                  </span>
                  {recipe.caloriesPerServing} for two
                </div>
              </div>
              <button type="button" onClick={() => setDetailsRecipe(recipe)} className='mt-4 w-full rounded-lg bg-black py-2 text-sm font-medium text-white'>View details</button>
            </div>
          ))}
        </div>
      </div>

      {detailsRecipe && <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4' onClick={() => setDetailsRecipe(null)}>
        <div className='w-full max-w-md rounded-xl bg-white p-5 shadow-2xl' onClick={(event) => event.stopPropagation()}>
          <div className='flex items-start justify-between gap-4'>
            <h2 className='text-lg font-bold'>{detailsRecipe.name}</h2>
            <button type="button" onClick={() => setDetailsRecipe(null)} className='text-xl text-gray-500' aria-label='Close details'>×</button>
          </div>
          <img src={detailsRecipe.image} alt={detailsRecipe.name} className='mt-4 h-48 w-full rounded-lg object-cover' />
          <p className='mt-4 text-sm text-gray-600'>{detailsRecipe.description}</p>
          <div className='mt-4 flex flex-wrap gap-3 text-sm text-gray-600'>
            <span>⭐ {detailsRecipe.rating}</span>
            <span>{detailsRecipe.cuisine}</span>
            <span>{detailsRecipe.cookTimeMinutes + detailsRecipe.prepTimeMinutes} mins</span>
          </div>
          <h3 className='text-lg font-bold mt-4'>Ingredients</h3>
          <p className='text-sm text-gray-600'>{detailsRecipe.ingredients}</p>
          <button type="button" onClick={() => navigate('/checkout', { state: { recipe: detailsRecipe } })} className='mt-5 w-full rounded-lg bg-[#FC8019] py-2.5 text-sm font-semibold text-white'>Continue to checkout</button>
        </div>
      </div>}
    </div>
  )
}

export default NearByRestaunt