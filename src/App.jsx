import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherProvider from './components/WeatherContext';
import WeatherRank from './components/WeatherRank';
import BackgroundVideo from './components/BackgroundVideo';

const App = () => {
  return (
    <div className='w-full h-[100vh]'>
      <BackgroundVideo />
      <div className="absolute flex flex-col items-center w-full">
        <div className='flex mt-10 md:mt-8 justify-center items-center gap-2'>
          <img src="https://i.imgur.com/JQZSwXl.png" alt="weather radar logo" className='w-14' />
          <h1 className='font-bold text-4xl bg-gradient-to-r from-customDarkPurple to-customPurple bg-clip-text text-transparent'>Weather<span className='bg-gradient-to-r from-customPurple to-customOrange bg-clip-text text-transparent'>Radar</span></h1>
        </div>
        <SearchBar />
        {/* <WeatherCard /> */}
        {/* <div className='flex flex-col md:flex-row gap-6'>
          <WeatherRank rankKind={'Hottest cities'} other={'This is the hottest cities top 5 ranking'} />
          <WeatherRank rankKind={'Coolest cities'} other={'This shows you the coldest cities'} />
          <WeatherRank rankKind={'Windy cities'} other={'And this, is for the windiest cities'} />
        </div> */}
      </div>
    </div>
  );
};

export default App;