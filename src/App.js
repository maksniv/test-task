import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import About from './pages/About/About';
import Rate from './pages/Rate/Rate';
import Help from './pages/Help/Help';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/test-task/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rate" element={<Rate />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
