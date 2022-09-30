import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/home';
import Detail from './components/pages/detailPage'

function App() {
  return (
    <>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/recipe/:id' element={<Detail/>}></Route>
       </Routes>
    </>
  );
}

export default App;
