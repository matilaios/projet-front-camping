
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CampingPage from './Pages/CampingPage';
import { Container } from 'react-bootstrap';
import HebergementPage from './Pages/HebergementPage';
import TarifPage from './Pages/TarifPage';
import ResaPage from './Pages/ResaPage';
import ContactPage from './Pages/ContactPage';




function App() {
  

  return <>
<Container  className="logo" >
<img src="src/Images/logo campinppong.webp" alt="logo camping" />
</Container>
  <BrowserRouter>
<Routes>
<Route path='/' element={<HomePage/>} />
<Route path='/CampingPage' element={<CampingPage/>}/>
<Route path='/HebergementPage' element={<HebergementPage/>}/>
<Route path='/TarifPage' element={<TarifPage/>}/>
<Route path='/ResaPage' element={<ResaPage/>}/>
<Route path='/ContactPage' element={<ContactPage/>}/>




</Routes>

  </BrowserRouter>

  <footer className='footer'>footer</footer>
  </>
    
}

export default App
