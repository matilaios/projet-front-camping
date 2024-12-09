import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/NavBar';
import { Button } from 'react-bootstrap';




const ResaPage = () => {
    return <>
    <NavBar/>
    <Button className='buttonHomePage'><a href="/" className="buttonHomePage"> Retour à la page d'accueil </a></Button>
    <h1>test ResaPage</h1>
  
    
    
    
    </>;
}
 
export default ResaPage;