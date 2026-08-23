import React from 'react'
import useFetch from './useFetch'
import Nav from './Nav';
import Hero from './Hero';
import NearByRestaunt from './NearByRestaunt';
import SearchByRestaut from './SearchByRestaut';
import WhatsOnYourMind from './WhatsOnYourMind';
import Personalized from './Personalized';
import Footer from './Footer';
import SignUp from './SignUp';

const App = () => {
  const { data, isLoading, error } = useFetch('http://dummyjson.com/recipes');

  if (isLoading) {
    return <div className='shadow-lg px-4 py-2 m-50'>Loading data, please wait...</div>
  }
  if (error) {
    return <div className='shadow-lg px-4 py-2'>Error: {error}</div>
  }
  return (
    <>
      <div className='font-poppins mx-25 mt-5'>
        <Nav />
        <Hero />
        <NearByRestaunt recipes={data?.recipes || []} />
      </div>
      <SearchByRestaut />
      <div className='mx-25'>
        <WhatsOnYourMind recipes={data?.recipes || []} />
        <Personalized recipes={data?.recipes || []} />
      </div>
      <Footer />

      <SignUp />

    </>

  )
}

export default App