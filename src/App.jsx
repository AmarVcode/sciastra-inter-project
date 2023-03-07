import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Appheader from './component/header/Header';
import Maincontent from './component/maincontent/Main';
import Appfooter from './component/Footer'
import Login from './component/Form/login';
import Sign from './component/Form/sign';

function App() {

  return (
    <>
    <Appheader/>
    <Routes>
  <Route path="/" element={<Maincontent/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/signin" element={<Sign/>} />

    </Routes>
    <Appfooter/>
  
    </>
  )
}

export default App