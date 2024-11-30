import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherProvider from './components/WeatherContext';
import WeatherRank from './components/WeatherRank';
import BackgroundVideo from './components/BackgroundVideo';


const App = () => {
  return (

    <WeatherProvider>
      <div className="flex flex-col items-center">
        <BackgroundVideo />
        <div className='flex mt-8 justify-center items-center gap-2'>
          <img src="https://i.imgur.com/JQZSwXl.png" alt="weather radar logo" className='w-14' />
          <h1 className='font-bold text-4xl bg-gradient-to-r from-customDarkPurple to-customPurple bg-clip-text text-transparent'>Weather<span className='bg-gradient-to-r from-customPurple to-customOrange bg-clip-text text-transparent'>Radar</span></h1>
        </div>
        <SearchBar />
        <WeatherCard />
        <div className='flex gap-6'>
          <WeatherRank rankKind={'Hottest cities'} other={'This is the hottest cities top 5 ranking'} />
          <WeatherRank rankKind={'Coolest cities'} other={'This shows you the coldest cities'} />
          <WeatherRank rankKind={'Windy cities'} other={'And this, is for the windiest cities'} />
        </div>
      </div>
    </WeatherProvider>

  );
};

export default App;