import React, { FC } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPages from './pages/main/MainPages.tsx'

const App:FC = () => {
  return (
    <div className='App'> 
      <MainPages />
    </div>
  );
}

export default App;
