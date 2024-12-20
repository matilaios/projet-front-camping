import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CampingPage from "./Pages/CampingPage";
import { Button, Container, Nav } from "react-bootstrap";
import HebergementPage from "./Pages/HebergementPage";
import TarifPage from "./Pages/TarifPage";
import ResaPage from "./Pages/ResaPage";
import ContactPage from "./Pages/ContactPage";
import NavBar from "./Components/NavBar";
import ActivitePage from "./Pages/ActivitePages";
import MyFooter from "./Components/Footer";
import LoginPage from "./Pages/LoginPage";
import SignInPage from "./Pages/SignInPage";
import HebergementDetailPage from "./Pages/DetailHebergementPage";
import { useNavigate } from "react-router-dom";
import AuthService from "./Services/AuthService";
import EditActivitePage from "./Pages/EditActivitePage";
import logo from "./Images/logocampingpong.webp";
import DetailHebergementPage from './Pages/DetailHebergementPage';
import EditTarifPage from "./Pages/EditTarifPage";

function App() {
  return (
    <>
      <Container className="logo">
        <img src={logo} alt="logo camping" />
      </Container>

<BrowserRouter>

<NavBar/>
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
<Route path='/HebergementPage/:idTYPE' element={<DetailHebergementPage/>}/>
{/* <Route path="/DetailPage" element={<HebergementDetailPage />} /> */}

<Route path='/EditActivitePage/:idActivite' element={<EditActivitePage/>}></Route>
<Route path='/EditTarifPage/:idTarif' element={<EditTarifPage/>}></Route>

  </Routes>

        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
