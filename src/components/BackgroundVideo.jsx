import React from 'react';
import ReactPlayer from 'react-player';

const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Y8ACyHYsb6Q" // Your video URL
        className="absolute top-[-50%] left-0 select-none"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} // Ensure it's behind
      />
    </div>
  );
};

export default BackgroundVideo;