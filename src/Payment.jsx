import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';


export default function Payment({ cart, setCart }) {
    const [address, setAddress] = useState('Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana');
    const [orderType, setOrderType] = useState('Subscription');
    const [subscriptionType, setSubscriptionType] = useState('Monthly');
    const [plan, setPlan] = useState('3-Days/Week');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('16:30');
    const [note, setNote] = useState('');
    const itemTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const deliveryFee = cart.length ? 131 : 0;
    const taxes = cart.length ? 2 : 0;
    const total = itemTotal + deliveryFee + taxes;
    const changeQuantity = (id, amount) => setCart((items) => items
        .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
        .filter((item) => item.quantity > 0));
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-4 sm:p-6 md:p-12">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">

                {/* Header */}
                <h1 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">
                    Secure Checkout
                </h1>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                    {/* Left Column: Checkout Details */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Delivery Address Section */}
                        <section>
                            <div className="flex items-center space-x-2 text-orange-500 font-medium mb-3">
                                <span className="text-lg">📍</span>
                                <h2 className="text-base text-gray-900 font-semibold">Delivery address</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Active Address */}
                                <button type="button" onClick={() => setAddress('Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana')} className={`text-left w-full p-4 rounded-xl relative shadow-sm cursor-pointer ${address === 'Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana' ? 'bg-orange-500 text-white' : 'bg-white border border-dashed border-orange-300 text-gray-600'}`}>
                                    <div className="absolute top-4 left-4 bg-white/20 p-1.5 rounded-full text-white text-xs">
                                        📍
                                    </div>
                                    <div className="pl-8 text-xs leading-relaxed font-medium">
                                        Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana
                                    </div>
                                </button>
                                {/* Inactive Address */}
                                <button type="button" onClick={() => setAddress('Dno. 45-67-89, ABC Residency, Jubilee Hills, Hyderabad, Telangana')} className={`text-left w-full p-4 rounded-xl relative cursor-pointer transition ${address.includes('Jubilee') ? 'bg-orange-500 text-white' : 'bg-white border border-dashed border-orange-300 text-gray-600'}`}>
                                    <div className="absolute top-4 left-4 bg-gray-100 p-1.5 rounded-full text-gray-500 text-xs">
                                        📍
                                    </div>
                                    <div className="pl-8 text-xs leading-relaxed">
                                        Dno. 45-67-89, ABC Residency, Jubilee Hills, Hyderabad, Telangana
                                    </div>
                                </button>
                            </div>
                        </section>

                        {/* Type of Order Section */}
                        <section>
                            <div className="flex items-center space-x-2 text-orange-500 font-medium mb-3">
                                <span className="text-lg">📍</span>
                                <h2 className="text-base text-gray-900 font-semibold">Type of Order</h2>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button type="button" onClick={() => setOrderType('Subscription')} className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-medium shadow-sm ${orderType === 'Subscription' ? 'bg-orange-500 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
                                    <span>📅</span> <span>Subscription</span>
                                </button>
                                <button type="button" onClick={() => setOrderType('Schedule Order')} className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-medium ${orderType === 'Schedule Order' ? 'bg-orange-500 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
                                    <span>📅</span> <span>Schedule Order</span>
                                </button>
                                <button type="button" onClick={() => setOrderType('Order Now')} className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-medium ${orderType === 'Order Now' ? 'bg-orange-500 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
                                    <span>📅</span> <span>Order Now</span>
                                </button>
                            </div>
                        </section>

                        {/* Subscription Sub-Configuration */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                            {/* Type of subscription? */}
                            <div>
                                <h3 className="text-xs font-semibold text-gray-900 mb-3">Type of subscription ?</h3>
                                <div className="flex space-x-6 border-b border-gray-200 text-xs pb-1">
                                    <button type="button" onClick={() => setSubscriptionType('Monthly')} className={subscriptionType === 'Monthly' ? 'text-orange-500 font-semibold border-b-2 border-orange-500 pb-2 px-1' : 'text-gray-500 font-medium pb-2 px-1'}>
                                        Monthly
                                    </button>
                                    <button type="button" onClick={() => setSubscriptionType('Weekly')} className={subscriptionType === 'Weekly' ? 'text-orange-500 font-semibold border-b-2 border-orange-500 pb-2 px-1' : 'text-gray-500 font-medium pb-2 px-1'}>
                                        Weekly
                                    </button>
                                    <button type="button" onClick={() => setSubscriptionType('Custom')} className={subscriptionType === 'Custom' ? 'text-orange-500 font-semibold border-b-2 border-orange-500 pb-2 px-1' : 'text-gray-500 font-medium pb-2 px-1'}>
                                        Custom
                                    </button>
                                </div>
                            </div>

                            {/* What's the plan? */}
                            <div>
                                <h3 className="text-xs font-semibold text-gray-900 mb-3">What's the plan?</h3>
                                <div className="flex space-x-3 text-xs">
                                    <button type="button" onClick={() => setPlan('3-Days/Week')} className={`px-4 py-2 rounded-lg font-medium ${plan === '3-Days/Week' ? 'border border-orange-500 text-orange-500 bg-orange-50/20' : 'border border-gray-200 text-gray-600'}`}>
                                        3-Days/Week
                                    </button>
                                    <button type="button" onClick={() => setPlan('5-Days/Week')} className={`px-4 py-2 rounded-lg font-medium ${plan === '5-Days/Week' ? 'border border-orange-500 text-orange-500 bg-orange-50/20' : 'border border-gray-200 text-gray-600'}`}>
                                        5-Days/Week
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Delivery Time & Notes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                            {/* Delivery Time Selection */}
                            <div>
                                <h3 className="text-xs font-semibold text-gray-900 mb-3">What time do you want us to deliver?</h3>
                                <label onClick={(event) => { if (event.target.tagName !== 'INPUT') event.currentTarget.querySelector('input')?.showPicker?.() }} className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-3 w-full max-w-xs cursor-pointer">
                                    <span className="text-gray-400 text-sm">🕒</span>
                                    <input type="time" value={deliveryTime} onChange={(event) => setDeliveryTime(event.target.value)} className="text-xs font-semibold text-gray-800 outline-none" />
                                    <span className="text-[10px] bg-orange-50 text-orange-500 px-1.5 py-0.5 rounded font-medium">
                                        24 hrs
                                    </span>
                                </label>
                                <label onClick={(event) => { if (event.target.tagName !== 'INPUT') event.currentTarget.querySelector('input')?.showPicker?.() }} className="block text-xs text-gray-500 mt-3 cursor-pointer">Delivery date
                                    <input type="date" value={deliveryDate} min={new Date().toISOString().split('T')[0]} onChange={(event) => setDeliveryDate(event.target.value)} className="block mt-1 w-full max-w-xs border border-gray-200 rounded-lg p-2 text-xs outline-none focus:border-orange-400 cursor-pointer" />
                                </label>
                            </div>

                            {/* Special Note Box */}
                            <div>
                                <h3 className="text-xs font-semibold text-gray-900 mb-3">Any Note for us?</h3>
                                <textarea
                                    placeholder="Type your note here"
                                    value={note}
                                    onChange={(event) => setNote(event.target.value)}
                                    className="w-full border border-gray-200 rounded-xl p-3 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 min-h-17.5 resize-none"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Checkout Sidebar / Invoice summary */}
                    <div className="bg-gray-50/60 rounded-xl p-5 border border-gray-100 flex flex-col justify-between">
                        <div>
                            {/* Sidebar Header */}
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
                                <h2 className="text-sm font-bold text-gray-900">Cart</h2>
                                <span className="text-xs text-gray-500 font-medium">{cart.reduce((count, item) => count + item.quantity, 0)} Items</span>
                            </div>

                            {/* Items Container */}
                            <div className="space-y-4 mb-6">
                                {cart.map((item) => <div key={item.id} className="text-xs">
                                    <span className="text-[10px] text-orange-600 block mb-0.5">{item.cuisine || 'Food item'}</span>
                                    <div className="flex justify-between items-center gap-2">
                                        <div>
                                            <p className="font-semibold text-gray-800">{item.name}</p>
                                            <p className="text-gray-500 mt-0.5">₹{item.price * item.quantity}</p>
                                        </div>
                                        <div className="flex items-center space-x-2.5 border border-gray-200 bg-white px-2 py-1 rounded-md text-xs font-medium text-gray-700 shadow-sm">
                                            <button type="button" onClick={() => changeQuantity(item.id, -1)} className="hover:text-orange-500 px-0.5" aria-label={`Remove one ${item.name}`}><FiMinus /></button>
                                            <span className="w-3 text-center text-gray-900 font-semibold">{item.quantity}</span>
                                            <button type="button" onClick={() => changeQuantity(item.id, 1)} className="hover:text-orange-500 px-0.5" aria-label={`Add one ${item.name}`}><FiPlus /></button>
                                        </div>
                                    </div>
                                </div>)}
                                {!cart.length && <p className="text-xs text-gray-500">Your cart is empty.</p>}
                            </div>

                            {/* Bill Details Breakdown */}
                            <div className="border-t border-gray-200 pt-3 space-y-2.5 text-xs text-gray-500">
                                <p className="font-semibold text-gray-700 mb-1">Bill details</p>
                                <div className="flex justify-between">
                                    <span>Item Total</span>
                                    <span className="font-medium text-gray-700">₹{itemTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span>Delivery Fee | 12.9 kms</span>
                                        <span className="block text-[10px] text-gray-400">Custom Delivery time</span>
                                    </div>
                                    <span className="font-medium text-gray-700">₹{deliveryFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Taxes and Charges</span>
                                    <span className="font-medium text-gray-700">₹{taxes.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Plan Label */}
                            <div className="mt-4 pt-3 border-t border-dashed border-gray-200">
                                <p className="text-[11px] text-gray-600 font-medium">
                                    {subscriptionType} + {plan} plan + {deliveryDate || 'today'} at {deliveryTime} · {address}
                                </p>
                            </div>

                            {/* Subscription Pricing */}
                            <div className="mt-2 space-y-1.5 text-xs text-gray-500">
                                <div className="flex justify-between">
                                    <span>Total</span>
                                    <span className="font-medium text-gray-700">₹{total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-emerald-600 font-medium">
                                    <span>Discount</span>
                                    <span>-₹4000.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Total Footer Area */}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <div className="flex justify-between items-baseline mb-4">
                                <span className="text-sm font-bold text-gray-900">Total</span>
                                <span className="text-xl font-extrabold text-gray-900">₹{total.toFixed(2)}</span>
                            </div>
                            <button type="button" onClick={() => alert('Payment successful')} className="w-full bg-orange-500 text-white text-xs font-semibold py-3 rounded-lg shadow-sm hover:bg-orange-600 transition active:scale-[0.98]">
                                Proceed To Payment
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}