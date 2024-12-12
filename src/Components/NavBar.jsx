import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return <>
  <Container className="d-flex justify-content-center ">
  <Navbar className='navBar'>
        
          
          <Nav>
            
            <Nav.Link className="navBarHover" ><Link to={"/CampingPage"}>CampingPage</Link></Nav.Link>
            <Nav.Link className="navBarHover"><Link to={"/HebergementPage"}>HébergementPage</Link></Nav.Link>
            <Nav.Link className="navBarHover"><Link to={"/ActivitePage"}>Nos activités</Link></Nav.Link>
            <Nav.Link className="navBarHover"><Link to={"/TarifPage"}>TarifPage</Link></Nav.Link>
            <Nav.Link className="navBarHover"><Link to={"/ResaPage"}>Réservation</Link></Nav.Link>
            <Nav.Link className="navBarHover"><Link to={"/ContactPage"}>Contact</Link></Nav.Link>
            <Nav.Link className="navBarHover"><Link to={"/"}>Retour à la page d'accueil</Link></Nav.Link>
            
          </Nav>
        
      </Navbar>
      </Container>
    </>
  
}

export default NavBar;