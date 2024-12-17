import React from 'react';
import { Container } from 'react-bootstrap';


const MyFooter = () => {
  return <>

  <div  className="d-flex justify-content-center">
    <footer className="footer">
      <div className="d-flex items-center">
        <span className="me-1">mentions-legales</span>
        <span  className="me-1">CGV-CGU</span>
        
        <span className="me-1">© 2024 Camping Pong</span>

        <span className="me-1"><a href='https://www.facebook.com/campingcezannesaintevictoire' target='_blank'><img className='logoReseaux' src="src/Images/facebook.png"></img></a>  </span>
        <span className="me-1"><a href='https://www.instagram.com/camping.le.cezanne/' target='_blank'><img className='logoReseaux' src="src/Images/instagram.png"></img></a>  </span>
      </div>
      
    </footer>
    </div>
    </>
};

export default MyFooter;