
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
import NavBar from './Components/NavBar';
import ActivitePage from './Pages/ActivitePages';
import MyFooter from './Components/Footer';
import LoginPage from './Pages/LoginPage';
import SignInPage from './Pages/SignInPage';
import HebergementDetailPage from './Pages/DetailHebergementPage';


function App() {
  
  return <>
  
  <BrowserRouter> 
<Container  className="logo" >
<img src="src/Images/logocampingpong.webp" alt="logo camping" />
</Container>



  <div>
    <NavBar/>
  </div>
<Routes>
<Route path='/' element={<HomePage/>} />
<Route path='/CampingPage' element={<CampingPage/>}/>
<Route path='/HebergementPage' element={<HebergementPage/>}/>
<Route path='/ActivitePage' element={<ActivitePage/>}/>
<Route path='/TarifPage' element={<TarifPage/>}/>
<Route path='/ResaPage' element={<ResaPage/>}/>
<Route path='/ContactPage' element={<ContactPage/>}/>
<Route path='/LoginPage' element={<LoginPage/>}/>
<Route path='/SignInPage' element={<SignInPage/>}/>
<Route path='/DetailPage' element={<HebergementDetailPage/>}/>
    </Routes>
<MyFooter/>
  </BrowserRouter>

  
 
  </>
    
}

export default App
