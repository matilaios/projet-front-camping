import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";
// import LogoutButton from "./LogoutButton.jsx";

function NavBar() {
  const isUserValid = AuthService.isValid();
  const navigate = useNavigate();

  return <>
  <div className="d-flex justify-content-center w-100">
  <Navbar expand="lg" style={{width:"100%"}} className='navBar'>
        
          
          <Nav >
            <Nav.Link className="navBarHover">
              <Link to={"/CampingPage"}>CampingPage</Link>
            </Nav.Link>
            <Nav.Link className="navBarHover">
              <Link to={"/HebergementPage"}>HébergementPage</Link>
            </Nav.Link>
            <Nav.Link className="navBarHover">
              <Link to={"/ActivitePage"}>Nos activités</Link>
            </Nav.Link>
            <Nav.Link className="navBarHover">
              <Link to={"/TarifPage"}>TarifPage</Link>
            </Nav.Link>
            <Nav.Link className="navBarHover">
              <Link to={"/ResaPage"}>Réservation</Link>
            </Nav.Link>
            <Nav.Link className="navBarHover">
              <Link to={"/ContactPage"}>Contact</Link>
            </Nav.Link>
            <Nav.Link className="navBarHover">
              <Link to={"/HomePage"}>Accueil</Link>
            </Nav.Link>
     
{/* bouton de la navbar qui change selon qu'on est connecté ou pas */}
{/* ok le 13/12/24 */}
  <Nav.Link className="navBarHover">
    {isUserValid ? (<Button variant="danger" onClick={()=>{AuthService.logout(); navigate('/HomePage')}}>Se déconnecter</Button>) 
    : (
      <Link to={"/LoginPage"}>Se connecter / s'inscrire</Link>
    )}
  </Nav.Link>

          </Nav>
      </Navbar>
        </div>
    </>
}

export default NavBar;
