import React from 'react';
import Main from './pages/Main'
import Explore from './pages/Explore';
import Planner from './pages/Planner';
import NavBar from './components/NavBar';
import Background from './components/Background';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//3. Personalized Daily Weather Briefings
// Use AI to generate concise, friendly summaries tailored to the user.
// “Good morning! It's 16°C in Mexico City. No rain expected. Great weather for your morning run!”

// 1. AI-Powered Travel Packing Assistant
// Suggest what to pack based on trip duration, destination weather, and planned activities.
// “Heading to Tokyo for 5 days? Expect rain and cool temps. Pack a raincoat, light layers, and waterproof shoes.”

//4. AI-Based Plant & Pet Care Tips
//UV take care and protection
//2. Mood-Based Weather Music/Playlist Recommender

// 6. Smart Alerts with Adaptive Notifications
// AI learns user habits (commute time, outdoor activities) and sends relevant alerts automatically.
// “You usually jog at 7 AM. Tomorrow there’ll be heavy rain—consider rescheduling.”

const App = () => {
  return (
  <Router>
    <div className="relative w-screen h-screen flex flex-col items-center justify-start gap-8">
      <Background />
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/planner' element={<Planner />} />
      </Routes>
    </div>
  </Router>);
};

export default App;