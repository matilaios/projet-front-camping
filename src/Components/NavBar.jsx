import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return <>
  <Navbar className='navBar'>
        
          
          <Nav className="d-flex gap-3 col-25">
            <Nav.Link className="navBarHover" ><Link to={"/CampingPage"}>CampingPage</Link></Nav.Link>
            <Nav.Link className="navBarHover"><Link to={"/HebergementPage"}>HébergementPage</Link></Nav.Link>
            <Nav.Link className="navBarHover"><Link to={"/TarifPage"}>TarifPage</Link></Nav.Link>
            <Nav.Link className="navBarHover"><Link to={"/ResaPage"}>Réservation</Link></Nav.Link>
            <Nav.Link className="navBarHover"><Link to={"/ContactPage"}>Contact</Link></Nav.Link>
          </Nav>
        
      </Navbar>
      
    </>
  
}

export default NavBar;