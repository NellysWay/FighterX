import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartScreen from './screens/Header.jsx';
import About from './screens/About.jsx';

function App() {

  return (
    <>
      <StartScreen className='header' />
      <About />
    </>
  );
}

export default App;
