import React from 'react';
import SearchBar from './components/SearchBar';
import BackgroundVideo from './components/BackgroundVideo';
import Footer from './components/Footer';

const App = () => {
  return (<>
    <div className="relative w-full h-[100vh] flex flex-col justify-between items-center before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#141236] before:pointer-events-none">
      <BackgroundVideo />
      <div className="relative flex flex-col items-center w-full h-full mt-16">
        <div className='flex justify-center items-center gap-2'>
          <img src="https://i.imgur.com/JQZSwXl.png" alt="weather radar logo" className='w-14' />
          <h1 className='font-bold text-4xl bg-gradient-to-r from-customDarkPurple to-customPurple bg-clip-text text-transparent'>Weather<span className='bg-gradient-to-r from-customPurple to-customOrange bg-clip-text text-transparent'>Radar</span></h1>
        </div>
        <SearchBar />
      </div>
    </div>
      <Footer className='relative' />
    </>);
};

export default App;