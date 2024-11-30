import React, { useState, useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const { fetchWeather } = useContext(WeatherContext);

  const handleSearch = () => {
    fetchWeather(location);
    setLocation('');
  };

  return (
    <div className="mt-6">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        className='px-2 py-1 border border-customDarkPurple'
      />
      <button className='border border-customDarkPurple bg-gradient-to-r from-customDarkPurple to-customPurple text-white px-6 py-1' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
