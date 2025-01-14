import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoWater } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";


const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherByCoordinates = (lat, lon) => {
    axios
      .get(`https://weatherradarserver.onrender.com/weather?lat=${lat}&lon=${lon}`)
      .then((result) => setWeatherData(result.data))
      .catch((err) => console.log(err));
  };

  const fetchWeatherByLocation = () => {
    axios
      .get(`https://weatherradarserver.onrender.com/weather?q=${location}`)
      .then((result) => setWeatherData(result.data))
      .catch((err) => console.log(err));
    setLocation('');
  };

  const handleSearch = () => {
    if (location) {
      fetchWeatherByLocation();
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Error fetching geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

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
        <button
          className='border border-customDarkPurple bg-gradient-to-r from-customDarkPurple to-customPurple text-white px-6 py-1'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {weatherData && (
        <div className='mt-4 flex justify-center flex-col items-center'>
          <div className='flex'>
            <div className='flex flex-col'>
              <p className='text-4xl font-bold text-customDarkPurple'>{weatherData.location.name}</p>
              <p>{weatherData.location.country}</p>
              <p>{weatherData.current.condition.text}</p>
            </div>
            <p className='text-6xl text-customOrange font-bold flex justify-end items-end'>
              {weatherData.current.temp_c}
              <span className='text-black text-xl'>°C</span>
            </p>
          </div>
          <div className=' bg-gradient-to-r from-customDarkPurple to-customPurple py-1 px-10 rounded-sm mt-4'>
            <p className='font-semibold text-lg text-white'>Feels like <span className='text-xl'>{weatherData.current.feelslike_c}</span>°C</p>
          </div>
          <div className='flex gap-10 mt-1'>
            <div className='flex items-center gap-2'>
              <FaSun className='text-4xl text-[#F9C300]' />
              <div className='flex flex-col'>
                <p className='text-customDarkPurple font-extrabold'>UV Index</p>
                <p>{weatherData.current.uv}</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <IoWater className='text-4xl text-[#0080F9]' />
              <div className='flex flex-col'>
                <p className='text-customDarkPurple font-extrabold'>Humidity</p>
                <p>{weatherData.current.humidity}%</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <FaWind className='text-4xl text-[#EAF4F4]' />
              <div className='flex flex-col'>
                <p className='text-customDarkPurple font-extrabold'>Wind</p>
                <p>{weatherData.current.wind_kph}km/h</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
