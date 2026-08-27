import { useLocation, useNavigate } from 'react-router-dom';
import { FaPercentage } from 'react-icons/fa';
import { FiSearch, FiHeart, FiPlus, FiMinus } from 'react-icons/fi';

const Checkout = ({ cart, setCart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedRecipe = location.state?.recipe;
  const recipePrice = selectedRecipe ? Math.max(120, Math.round(selectedRecipe.caloriesPerServing || 200)) : 0;
  const addToCart = () => {
    if (!selectedRecipe) return;
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === selectedRecipe.id);
      if (existing) return currentCart.map((item) => item.id === selectedRecipe.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...currentCart, { ...selectedRecipe, price: recipePrice, quantity: 1 }];
    });
  };
  const changeQuantity = (id, amount) => setCart((currentCart) => currentCart
    .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
    .filter((item) => item.quantity > 0));
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 mt-10">
      <div className="bg-[#1c1c1c] text-white px-4 py-6 sm:px-8 lg:px-16 lg:py-8 flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start max-w-4xl">
          <div className="w-full max-w-52 h-32 rounded-lg overflow-hidden shrink-0">
            <img 
              src={selectedRecipe?.image || 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600'} 
              alt="Meals and Thalis" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold mb-1 sm:text-2xl">{selectedRecipe?.name || 'Your order'}</h1>
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-4">{selectedRecipe?.cuisine || 'Choose a food item to begin'}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 sm:gap-8">
              <div>
                <span className="text-yellow-400 mr-1">★</span>
                <span className="font-semibold">{selectedRecipe?.rating || '-'}</span>
                <span className="text-xs text-gray-500 block">100+ ratings</span>
              </div>
              <div className="hidden border-l border-gray-700 h-8 sm:block"></div>
              <div>
                <span className="font-semibold block">{selectedRecipe ? selectedRecipe.cookTimeMinutes + selectedRecipe.prepTimeMinutes : '-'} Mins</span>
                <span className="text-xs text-gray-500">Delivery Time</span>
              </div>
              <div className="hidden border-l border-gray-700 h-8 sm:block"></div>
              <div>
                <span className="font-semibold block">₹{selectedRecipe ? recipePrice : '-'}</span>
                <span className="text-xs text-gray-500">Cost for two</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-dashed border-orange-500/50 bg-orange-500/5 rounded-lg p-4 text-xs flex flex-col gap-3 w-full max-w-sm">
          <span className="text-orange-400 font-semibold tracking-wide uppercase text-[10px]">Offers</span>
          <div className="flex items-start gap-2">
            <FaPercentage className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
            <p className="text-gray-300">50% off up to ₹100 | Use code <span className="font-semibold text-white">TRYNEW</span></p>
          </div>
          <div className="flex items-start gap-2">
            <FaPercentage className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
            <p className="text-gray-300">20% off | Use code <span className="font-semibold text-white">PARTY</span></p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 flex flex-col gap-4 border-b border-gray-100 bg-white sticky top-0 z-10 shadow-sm sm:px-8 lg:px-16 lg:flex-row">
        <div className="relative w-full max-w-sm">
          <input 
            type="text" 
            placeholder="Search for dish" 
            className="w-full pl-4 pr-10 py-1.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-400 placeholder-gray-400"
          />
          <FiSearch className="w-4 h-4 text-gray-400 absolute right-3 top-2.5" />
        </div>
        <button className="flex items-center justify-center gap-2 border border-gray-200 px-4 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          <FiHeart className="w-4 h-4 text-gray-400" />
          <span>Favourite</span>
        </button>
      </div>

      <div className="px-4 py-8 flex flex-col gap-8 sm:px-8 lg:px-16 xl:flex-row">
        <div className="w-full shrink-0 flex flex-col gap-3 text-sm font-medium border-b border-gray-100 pb-4 xl:w-48 xl:border-b-0 xl:border-r xl:pr-4 xl:pb-0">
          <span className="text-orange-500 cursor-pointer">Recommended</span>
          <span className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">Breakfast Box</span>
          <span className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">Lunch Box</span>
          <span className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">Combo Box</span>
          <span className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">Biriyani Box</span>
        </div>

        <div className="flex-1 max-w-3xl xl:pr-8">
          <div className="flex flex-col gap-5 pb-8 border-b border-gray-100 sm:flex-row sm:justify-between sm:items-start">
            <div className="flex-1 sm:pr-6">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 flex-wrap">
                {selectedRecipe?.name || 'Select a food card'}
              </h3>
              <span className="text-sm font-semibold text-gray-700 block mt-1">{selectedRecipe ? `₹${recipePrice}` : 'No item selected'}</span>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                {selectedRecipe?.description || 'Click a food card to view it here and add it to your cart.'}
              </p>
            </div>

            <div className="w-28 relative shrink-0 flex flex-col items-center">
              <div className="w-24 h-24 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={selectedRecipe?.image || 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600'} 
                  alt="Brunch Pack" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button onClick={addToCart} disabled={!selectedRecipe} className="absolute -bottom-3 bg-white border border-gray-200 text-green-600 px-5 py-1 rounded-md text-xs font-bold shadow-md hover:bg-gray-50 flex items-center gap-1 transition-transform transform active:scale-95 disabled:text-gray-400">
                Add <FiPlus className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full shrink-0 flex flex-col gap-6 xl:w-80">
          <div>
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="text-xl font-bold text-gray-800">Cart</h2>
              <span className="text-xs text-gray-400 font-medium">{cart.reduce((total, item) => total + item.quantity, 0)} Items</span>
            </div>

            <div className="flex flex-col gap-4">
              {cart.map((item) => <div key={item.id} className="text-xs">
                <span className="text-[10px] text-orange-400 block font-medium mb-1">{item.cuisine || 'Food item'}</span>
                <div className="flex justify-between items-center gap-3">
                  <span className="text-gray-700 font-medium w-44 truncate">{item.name}</span>
                  <div className="flex items-center gap-3 border border-gray-200 px-2 py-1 rounded">
                    <button type="button" onClick={() => changeQuantity(item.id, -1)} aria-label={`Remove one ${item.name}`}><FiMinus className="w-3 h-3 text-gray-400 cursor-pointer" /></button>
                    <span className="font-semibold text-gray-700">{item.quantity}</span>
                    <button type="button" onClick={() => changeQuantity(item.id, 1)} aria-label={`Add one ${item.name}`}><FiPlus className="w-3 h-3 text-gray-600 cursor-pointer" /></button>
                  </div>
                </div>
                <span className="text-gray-400 block mt-1">₹{item.price * item.quantity}</span>
              </div>)}
              {!cart.length && <span className="text-sm text-gray-400">Your cart is empty.</span>}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm font-semibold text-gray-800 block">Subtotal</span>
                <span className="text-[10px] text-gray-400">Extra charges may apply</span>
              </div>
              <span className="text-lg font-bold text-gray-800">₹{subtotal}</span>
            </div>
          </div>

          <button type="button" onClick={() => navigate('/payment')} disabled={!cart.length} className="w-full bg-[#ff7e36] text-white py-3 rounded-lg font-semibold text-sm shadow-md hover:bg-[#eb6f28] transition-colors tracking-wide disabled:opacity-50 disabled:cursor-not-allowed">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
