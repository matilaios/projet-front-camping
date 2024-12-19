import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/NavBar';
import { Button, Container, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const ContactPage = () => {


  
    return <>
   
    <Container className="formulaire">
    <h1 className='h1formulaire'>FORMULAIRE DE CONTACT</h1>

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
    <label className="form-label">MAIL :</label>
    <input 
      name="mail"
      type="email"
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
    <label className="form-label">Message :</label>
    <InputGroup  className='form-label-message'> 
     <Form.Control as="textarea" aria-label="With textarea" />
     </InputGroup>
     </div>

     <div>
    
    <input 
      name="TEL"
      type="checkbox"
      className="form-input"
    />
    <label>je ne suis pas un robot</label>
  </div>

  <div className='d-flex justify-content-center'>
  <Button className='buttonEnvoyer' type="submit">Envoyer</Button>
  </div>
        
        
      

</div>








    </Container>
    
    
    
    </>;
}
 
export default ContactPage;