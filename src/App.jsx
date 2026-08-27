import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import useFetch from './useFetch'
import Nav from './Nav';
import Hero from './Hero';
import NearByRestaunt from './NearByRestaunt';
import SearchByRestaut from './SearchByRestaut';
import WhatsOnYourMind from './WhatsOnYourMind';
import Personalized from './Personalized';
import Footer from './Footer';
import SignUp from './SignUp';
import SearchPage from './SearchPage';
import Checkout from './Checkout';
import Payment from './Payment';

const App = () => {
  const { data, isLoading, error } = useFetch('https://dummyjson.com/recipes');
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('fitme-user'));
    } catch {
      return null;
    }
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  if (isLoading) {
    return <div className='text-4xl shadow-lg px-4 py-2 m-50'>Loading data, please wait...</div>
  }
  if (error) {
    return <div className='text-4xl shadow-lg px-4 py-2'>Error: {error}</div>
  }
  const handleLogin = (account) => {
    localStorage.setItem('fitme-user', JSON.stringify(account));
    setUser(account);
    setIsSignUpOpen(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PageLayout onSearch={(query) => { setSearchQuery(query); }} onSignIn={() => setIsSignUpOpen(true)} user={user}>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <Hero />
              <NearByRestaunt recipes={data?.recipes || []} />
            </div>
            <SearchByRestaut />
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <WhatsOnYourMind recipes={data?.recipes || []} />
              <Personalized recipes={data?.recipes || []} />
            </div>
          </PageLayout>
        } />
        <Route path="/search" element={
          <PageLayout onSearch={(query) => setSearchQuery(query)} onSignIn={() => setIsSignUpOpen(true)} user={user}>
            <SearchPage key={searchQuery} recipes={data?.recipes || []} initialQuery={searchQuery} />
          </PageLayout>
        } />
        <Route path="/checkout" element={
          <PageLayout onSearch={(query) => setSearchQuery(query)} onSignIn={() => setIsSignUpOpen(true)} user={user}>
            <Checkout cart={cart} setCart={setCart} />
          </PageLayout>
        } />
        <Route path="/payment" element={
          <PageLayout onSearch={(query) => setSearchQuery(query)} onSignIn={() => setIsSignUpOpen(true)} user={user}>
            <Payment cart={cart} setCart={setCart} />
          </PageLayout>
        } />
      </Routes>
      {isSignUpOpen && <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4'>
        <div className='w-full max-w-md'><SignUp onClose={() => setIsSignUpOpen(false)} onLogin={handleLogin} /></div>
      </div>}
    </BrowserRouter>
  )
}

const PageLayout = ({ children, onSearch, onSignIn, user }) => {
  const navigate = useNavigate();

  return <div className='relative min-h-screen overflow-x-hidden'>
    <div className='font-poppins mt-5'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Nav onSearch={(query) => { onSearch(query); navigate('/search'); }} onSignIn={onSignIn} onCart={() => navigate('/checkout')} user={user} />
      </div>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>{children}</div>
      <Footer />
    </div>
  </div>
}

export default App