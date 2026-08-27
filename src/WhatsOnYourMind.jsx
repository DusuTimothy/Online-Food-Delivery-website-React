import { useNavigate } from 'react-router-dom'

const WhatsOnYourMind = ({ recipes }) => {
  const navigate = useNavigate()
  return (
    <div className='my-20'>
      <h2 className='my-6 font-bold'>What's on your mind?</h2>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
        {recipes && recipes.slice(8, 14).map((recipe) => (
          <div key={recipe.id} onClick={() => navigate('/checkout', { state: { recipe } })} role="button" tabIndex={0} className='flex flex-col items-center cursor-pointer'>
            <img src={recipe.image} alt={recipe.name} className='w-24 h-24 rounded-full object-cover sm:w-28 sm:h-28' />
            <p className='mt-2 text-xs text-center sm:text-sm'>{recipe.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatsOnYourMind