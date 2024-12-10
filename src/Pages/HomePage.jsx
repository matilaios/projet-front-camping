import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/NavBar';
import MyCarousel from '../Components/Carousel'
import { Container } from 'react-bootstrap';






const HomePage = () => {
    return <>
    
    <NavBar/>
   
  <Container className='d-flex justify-content-center mt-2rem'>
    <MyCarousel></MyCarousel>
    </Container>
    
    </>;
}
 
export default HomePage;