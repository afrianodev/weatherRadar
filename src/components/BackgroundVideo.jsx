import React from 'react';
import BgVideo from '../assets/BgVideoWeatherRadarLoop.mp4'

const BackgroundVideo = () => {
  return (
    <div className="w-[100%] h-[100vh] absolute overflow-hidden -z-10">
      <video src={BgVideo}
      className='w-[100%] h-[100%] object-cover absolute -top-10 scale-125 md:scale-150'
      autoPlay
      loop
      muted
      playsInline //To auto play on mobiles
      ></video>
    </div>
  );
};

export default BackgroundVideo;
