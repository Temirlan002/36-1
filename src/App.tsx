import React, { FC } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPages from './pages/main/MainPages.tsx'
import AboutPage from './pages/aboutPage/AboutPage.jsx';

const App:FC = () => {
  return (
    <div className='App'> 
      {/* <MainPages /> */}
      <AboutPage />
    </div>
  );
}

export default App;
