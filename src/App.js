import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Navbar';
import Cards from './pages/Cards/Cards.js';
import Analytics from './pages/Analytics/Analytics.jsx';
import Community from './pages/Community/Community';
import ContactUs from './pages/Contact/ContactUs.jsx';
import Calendar from './pages/Calendar/Calendar.jsx';
import Blog from './pages/Blog/index.jsx';  
import Home1 from './pages/Blog/BlogHome/index.jsx';
import Assessment from './pages/Assessment/Assessment.js';
import Landingpage from './pages/Landingpage.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">

      <Sidebar/>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/games/cards" element={<Cards />} />
          <Route path="/games/assessment" element={<Assessment />} />
          <Route path="/community" element={<Community />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path='/blog' element ={< Home1 />} />
          <Route path='/blog/:id' element ={< Blog />} />
        </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;