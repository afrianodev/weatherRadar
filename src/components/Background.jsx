import React from 'react'

function Background() {
  return (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="fixed top-0 left-0 w-screen h-screen object-cover -z-10 opacity-50"
  >
    <source src='background-video-clouds.mp4' type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  )
}

export default Background