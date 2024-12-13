import NavBar from "../Components/NavBar";
import MyFooter from "../Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';




const SignInPage = () => {
    return <>
    
    <NavBar/>
    <h1>test SignIn</h1>
    <Container className="formulaireInscription">
    <h1 className='h1formulaire'>FORMULAIRE D'INSCRIPTION</h1>

    <div>
  <div className="form-group">
    <label className="form-label">NOM :</label>
    <input 
      name="Nom"
      type="text"
      className="form-input"
    />
  </div>

  <div className="form-group">
    <label className="form-label">PRENOM :</label>
    <input 
      name="prenom"
      type="text"
      className="form-input"
    />
  </div>

  <div className="form-group">
    <label className="form-label">Date de Naissance :</label>
    <input 
      name="datedenaissance"
      type="date"
      className="form-input"
    />
  </div>

  <div className="form-group">
    <label className="form-label">TEL :</label>
    <input 
      name="TEL"
      type="tel"
      className="form-input"
    />
  </div>

  <div className="form-group">
    <label className="form-label">Adresse :</label>
    <input 
      name="adressepostal"
      type="adresse"
      className="form-input"
    />
  </div>

  <div className="form-group">
    <label className="form-label">CP  :</label>
    <input 
      name="CP"
      type="CP"
      className="form-input"
    />
    </div>
    <div className="form-group">
    <label className="form-label">VILLE  :</label>
    <input 
      name="mail"
      type="ville"
      className="form-input"
    />
  </div>

  <div className="form-group">
    <label className="form-label">Pays :</label>
    <input 
      name="mail"
      type="email"
      className="form-input"
    />
  </div>
 
    <div className="form-group">
    <label className="form-label">Mail :</label>
    <input 
      name="mail"
      type="ville"
      className="form-input"
    />
  </div><div className="form-group">
    <label className="form-label">Mot de Passe  :</label>
    <input 
      name="password"
      type="password"
      className="form-input"
    />
  </div>
  
  <div className='d-flex justify-content-center'>
  <Button className='buttonEnvoyer' type="submit">Envoyer</Button>
  </div>
        
        
      

</div>








    </Container>

    
    <MyFooter/>
    

    
    </>;
}
 
export default SignInPage;