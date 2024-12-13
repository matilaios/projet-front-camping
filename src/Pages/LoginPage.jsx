import { useContext, useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import UserService from "../Services/UserService";
import AuthService from "../Services/AuthService";
import LogoutButton from "../Components/LogOutButton";
import NavBar from '../Components/NavBar';
import MyFooter from "../Components/Footer";

const LoginPage = () => {

    // const [user, setUser] = useState({});
  const [mailUser, setMailUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const {setIsAuthenticated} = useContext(AuthContext);

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setUser({
  //     ...user,
  //     [e.target.mail]: e.target.value,
  //     [e.target.password]: e.target.value
  //   });
  // }
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e)
    try{
        const response = await UserService.loginUser(mailUser, passwordUser);
        console.log(response);
        localStorage.setItem('token', response.data.token); 
        AuthService.setAxiosToken();
        setIsAuthenticated(true);
        navigate('/');
    } catch (error){
      console.log(error);
      navigate('/loginpage');
    }
  }

    return <>
   
  <div className="headerLoginPage"></div>
  <div className="d-flex flex-column align-item-center">
     <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        name={"mail"} 
        onChange={(e) => setMailUser=(e.target.value)} required
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        name={"password"} 
        onChange={(e) => setPasswordUser=(e.target.value)} required
        />
      </Form.Group>
     
      <Button variant="success" type="submit" className="d-flex justify-content-center">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
<Container className="d-flex flex-direction justify-content-center align-items-center">
    <div className="lienInscription">

<p className="pLogin"> si vous n'êtes pas inscrits, merci de cliquer :</p>
<Link to={"/SignInPage"}><button className="buttonInscription">Inscription</button></Link>
    </div>
    </Container>
    
    </>;
}
 
export default LoginPage;