import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartScreen from './screens/Header.jsx';
import About from './screens/About.jsx';
import PersonalProject from './screens/PersonalProjects.jsx';
import ProWork from './screens/ProfessionalWork.jsx';

function App() {

  return (
    <div className='background' >
      <StartScreen className='header' />
      <About />
      <PersonalProject />
      <ProWork />
    </div>
  );
}

export default App;
