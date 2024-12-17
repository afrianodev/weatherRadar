import React, { useState, useContext } from 'react';
import { WeatherContext } from './WeatherContext';
import axios from 'axios';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // const { fetchWeather } = useContext(WeatherContext);

  const handleSearch = () => {
    axios
      .get(`https://weatherradarserver.onrender.com/weather?q=${location}`)
      .then((result) => setWeatherData(result.data))
      .catch((err) => console.log(err));
    setLocation('');
  };

  const handleEnter = (e) => {
    if(e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="mt-6 flex flex-col">
      <div className='flex justify-center'>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleEnter}
          placeholder="Enter location"
          className='px-2 py-1 border border-customDarkPurple'
        />
        <button className='border border-customDarkPurple bg-gradient-to-r from-customDarkPurple to-customPurple text-white px-6 py-1' onClick={handleSearch}>Search</button>
      </div>
      {weatherData && (
        <div className='mt-6 flex gap-4 justify-center'>
          <div>
            <p className='text-4xl font-bold text-customDarkPurple'>{weatherData.location.name}</p>
            <p>{weatherData.location.country}</p>
            <p>{weatherData.current.condition.text}</p>
          </div>
          <p className='text-6xl text-customOrange font-bold flex justify-end items-end'>{weatherData.current.temp_c}<span className='text-black text-xl'>°C</span></p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
