import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { toast } from "react-toastify";
import UserService from "../Services/UserService";
import { useNavigate } from 'react-router-dom';







const SignInPage = () => {

    const [user, setUser]=useState({});
    const navigate=useNavigate();
    const handleChange=(e)=>{
      console.log(e.target.value);
      console.log(e.target.name);
      setUser({...user,[e.target.name]:e.target.value});
      
    }
    
    const handleSubmit= async (e)=>{
      e.preventDefault();
     
  
  try {
  
      const response  = await UserService.createUser(user);
      setUser(response);
      alert("inscription réussie")
      navigate('/loginPage')

    } catch (error) {
      console.log(error)
      alert("échec de l'inscription")
    }}





    return <>
    
    
    
    <Container className="formulaireInscription">
    <h1 className='h1formulaire'>FORMULAIRE D'INSCRIPTION</h1>

    
        
    <form onSubmit={handleSubmit}> 
    <InputGroup className="mb-3  gap-2" >
        <InputGroup.Text id="basic-addon1">Nom</InputGroup.Text>
        <Form.Control
          placeholder="ex : DUPONT"
          aria-label="nom"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="nom"
        />

        
 </InputGroup>
 <InputGroup className="mb-3  gap-2" >
 <InputGroup.Text id="basic-addon1">Prénom</InputGroup.Text>
        <Form.Control
          placeholder="ex : Philippe"
          aria-label="prenom"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="prenom"
        />
 </InputGroup>

 <InputGroup className="mb-3  gap-2" >
 <InputGroup.Text id="basic-addon1">Date de Naissance</InputGroup.Text>
        <Form.Control
          type="date"
          
          aria-label="dateNaissance"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="dateNaissance"
        />
 </InputGroup>
 <InputGroup className="mb-3  gap-2" >
 <InputGroup.Text id="basic-addon1">telephone</InputGroup.Text>
        <Form.Control
          type="tel"
          aria-label="telephone"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="telephone"
        />
 </InputGroup>
 <InputGroup className="mb-3  gap-2" >
 <InputGroup.Text id="basic-addon1">adresse</InputGroup.Text>
        <Form.Control
          
          aria-label="adresse"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="adresse"
        />
 </InputGroup>
 <InputGroup className="mb-3  gap-2" >
 <InputGroup.Text id="basic-addon1">Code Postal</InputGroup.Text>
        <Form.Control
          
          aria-label="codePostal"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="codePostal"
        />

 <InputGroup.Text id="basic-addon1">Ville</InputGroup.Text>
        <Form.Control
          
          aria-label="ville"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="ville"
        />
 </InputGroup>
 <InputGroup className="mb-3  gap-2" >
 <InputGroup.Text id="basic-addon1">Pays</InputGroup.Text>
        <Form.Control
          
          aria-label="pays"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="pays"
        />
 </InputGroup>
 <InputGroup className="mb-3  gap-2" >
 <InputGroup.Text id="basic-addon1">Mail</InputGroup.Text>
        <Form.Control
          
          aria-label="mail"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="mail"
        />
 </InputGroup>
 <InputGroup className="mb-3  gap-2" >
 <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
        <Form.Control
          type="password"
          aria-label="password"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="password"
        />
</InputGroup>


 <Form.Control 
  type="submit" 
  value="Inscription" 
  className="btn btn-primary"
/>
        </form>
     
  








    </Container>

    
    
    

    
    </>;
}
 
export default SignInPage;