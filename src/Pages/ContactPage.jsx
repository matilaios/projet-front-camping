import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/NavBar';
import { Button, Container, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import MyFooter from '../Components/Footer';

import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';



const ContactPage = () => {

const [capValue, setCapValue]=useState()



    return <>
   
    

    <Container className="formulaire">
    <h1 className='h1formulaire'>FORMULAIRE DE CONTACT</h1>

    <div>
  <div className="form-group">
 
        <InputGroup.Text className="InputFormContact">Nom</InputGroup.Text>
        <Form.Control
        className='FormControlContact'
          placeholder="ex : DUPONT"
          aria-label="nom"
          aria-describedby="basic-addon1"
          name="nom"
          required
          
        />
  </div>

  <div className="form-group">
 
        <InputGroup.Text className="InputFormContact">Prénom</InputGroup.Text>
        <Form.Control
        className='FormControlContact'
          placeholder="ex : DUPONT"
          aria-label="prenom"
          aria-describedby="basic-addon1"
          name="prenom"
          required
          
        />
  </div>

  <div className="form-group">
 
        <InputGroup.Text className="InputFormContact">Mail</InputGroup.Text>
        <Form.Control
        className='FormControlContact'
          placeholder="ex : exemple@gmail.fr"
          aria-label="mail"
          aria-describedby="basic-addon1"
          name="mail"
          required
          
        />
  </div>

  <div className="form-group">
 
        <InputGroup.Text className="InputFormContact">Telephone</InputGroup.Text>
        <Form.Control
        className='FormControlContact'
           maxLength={10}
          aria-label="tel"
          aria-describedby="basic-addon1"
          name="tel"
          required
          
        />
  </div>

  <div className="form-group">
 
 <InputGroup.Text className="InputFormContactMessage">Message</InputGroup.Text>
 <Form.Control
    className='FormControlContactMessage'
    as="textarea"
    maxLength={255}
   aria-label="textarea"
   aria-describedby="basic-addon1"
   name="text"
   required
   
 />
</div>

  

     <div>
    
    <ReCAPTCHA className='recaptcha'
    sitekey='6Lf8caAqAAAAABsvHyguJMBcWN4cGN5tf0nmjOCN'
    onChange={(value)=> setCapValue(value)}
    />
  </div>

  <div className='d-flex justify-content-center'>
  <Button disabled={!capValue} className='buttonEnvoyer' type="submit">Envoyer</Button>
  </div>
        
        
      

</div>








    </Container>
    
    
    
    </>;
}
 
export default ContactPage;