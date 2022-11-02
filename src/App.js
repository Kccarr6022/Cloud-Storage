import React, { useState, useEffect } from "react";
import {Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Live from './views/Live'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={< Home/>} />
      <Route path='/live' element={< Live/>} />
      <Route path='/' element={< Home/>} />
      <Route path='/' element={< Home/>} />
    </Routes>
    </>
  );
}

export default App;
