import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import './css/MovieList.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="logo-container">
          <img src="logo.png" alt="MovieOn Logo" className="logo" />
          <h1>MovieOn</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;