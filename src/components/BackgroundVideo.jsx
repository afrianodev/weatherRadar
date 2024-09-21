import React from 'react';
import ReactPlayer from 'react-player';

const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-[-1] pointer-events-none">
        <iframe
          className="absolute -top-36 md:-top-36 -left-60 md:left-0 w-[300%] lg:w-[200%] h-[800px]"
          src="https://www.youtube.com/embed/Y8ACyHYsb6Q?autoplay=1&mute=1&controls=0&loop=1&playlist=Y8ACyHYsb6Q"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
    </div>
  );
};

export default BackgroundVideo;