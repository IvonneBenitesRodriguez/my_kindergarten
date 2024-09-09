import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/homepage/Navbar';
import Footer from './components/homepage/Footer';
import Carousel from './components/homepage/Carousel';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Carousel />
          </>
        }
      />
    </Routes>
    <Footer />
  </>
);

export default App;
