import React from 'react'

const WhatsOnYourMind = ({ recipes }) => {
  return (
    <div className='my-20 mx-25'>
      <h2 className='my-6 font-bold'>What's on your mind?</h2>
      <div className=' flex justify-between items-center '>
        {recipes && recipes.slice(8, 14).map((recipe) => (
          <div key={recipe.id} className=''>
            <img src={recipe.image} alt={recipe.name} width={120}
              className='rounded-full' />
            <p className='mt-2 text-sm text-center'>{recipe.name}</p>

          </div>
        ))}
      </div>
    </div>

  )
}

export default WhatsOnYourMind