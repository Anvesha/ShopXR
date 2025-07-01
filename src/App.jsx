import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Getstarted from './Pages/Getstarted';
import Uploadpage from './Pages/Uploadpage';
import Startanduploadvideo from './Pages/Startanduploadvideo';
import Contact from './Pages/Contact';
import VideoTutorials from './Pages/Videotutorial';
import ProfileDashboard from './Pages/Profiledashboard';
import UploadGalleryPage from './Pages/UploadGalleryPage';
import CustomizePage from './Pages/CustomizePage';
import AnalyticsPage from './Pages/AnalyticsPage'
import AnalyticsviewPage from './Pages/AnalyticsviewPage'


import UserContext from './context/UserContext';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          {/* Public / Home Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/getstarted" element={<Getstarted />} />
          <Route path="/uploadpage" element={<Uploadpage />} />
          <Route path="/startanduploadvideo" element={<Startanduploadvideo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videotutorials" element={<VideoTutorials />} />
          <Route path="/profiledashboard" element={<ProfileDashboard />} />
          <Route path="/uploadgallerypage" element={<UploadGalleryPage />} />
          <Route path="/customize" element={<CustomizePage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/analyticsview" element={<AnalyticsviewPage />} />
          

          {/* Auth Routes */}
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Optional: catch-all route */}
          <Route path="*" element={<h1 style={{ color: 'white', textAlign: 'center', marginTop: '40px' }}>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
