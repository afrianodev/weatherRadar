import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherProvider from './components/WeatherContext';
import WeatherRank from './components/WeatherRank';


const App = () => {
  return (
    <WeatherProvider>
      <div className="flex flex-col items-center">
        <h1 className='mt-6 font-bold text-4xl'>WeatherRadar</h1>
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