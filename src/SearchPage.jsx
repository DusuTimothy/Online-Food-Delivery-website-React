import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchPage = ({ recipes, initialQuery = '' }) => {
    const [query, setQuery] = useState(initialQuery)
    const navigate = useNavigate()
    const normalizedQuery = query.toLowerCase().trim()
    const results = recipes.filter((recipe) =>
        `${recipe.name} ${recipe.cuisine} ${recipe.tags?.join(' ') || ''}`.toLowerCase().includes(normalizedQuery)
    )

    return (
        <div className="min-h-screen bg-white p-6 md:p-12 font-sans text-gray-800">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold">Search Food</h1>
                <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search by dish or cuisine"
                    className="w-full sm:w-80 border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-[#FC8019]"
                />
            </div>
            <p className="text-sm text-gray-500 mt-3">{results.length} item{results.length === 1 ? '' : 's'} found</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                {results.map((recipe) => (
                    <div key={recipe.id} onClick={() => navigate('/checkout', { state: { recipe } })} role="button" tabIndex={0} className="p-4 bg-[#F8F8F8] rounded-xl cursor-pointer">
                        <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover rounded-lg" />
                        <h2 className="mt-4 text-sm font-semibold">{recipe.name}</h2>
                        <p className="text-sm text-gray-500 mt-2">{recipe.cuisine}</p>
                        <p className="text-sm mt-3">⭐ {recipe.rating} · {recipe.cookTimeMinutes + recipe.prepTimeMinutes} mins</p>
                    </div>
                ))}
            </div>
            {!results.length && <p className="text-center text-gray-500 mt-12">No food items match your search.</p>}
        </div>
    );
}

export default SearchPage