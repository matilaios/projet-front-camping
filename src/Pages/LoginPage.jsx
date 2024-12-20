import { useContext, useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import AuthContext from "../Context/AuthContext";
import UserService from "../Services/UserService";
import AuthService from "../Services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



// import LogoutButton from "../Components/LogoutButton.jsx";



const LoginPage = () => {
  //  const [user, setUser] = useState({});
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const { setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setUser({
  //     ...user,
  //     [e.target.mail]: e.target.value,
  //     [e.target.password]: e.target.value
  //   });
  // };
  console.log("je veux me logger");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserService.loginUser({ mail, password });
      console.log(response.data);
      console.log(response.data.token);

      AuthService.setAxiosToken();
      setIsAuthenticated(true);
      localStorage.setItem("token", response.data.token);
      // alert("connexion réussie");
      toast.success('connextion réussie')
      navigate("/");
    } catch (error) {
      console.log(error);
      // alert("erreur lors de la connexion");
      toast.error("erreur lors de l'inscription")
      // navigate('/loginpage');
    }
  };

  return <>
      <div className="headerLoginPage">
      <div className="d-flex flex-column justify-content-center align-item-center">
        <Container className="d-flex justify-content-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              < Form.Label>Email address</Form.Label>
              <Form.Control
              className="formLogin"
                type="email"
                placeholder="Enter email"
                name="mail"
                required
                onChange={(e) => setMail(e.target.value)}
              />
              <Form.Text className="text-muted">
                Partage pas ton email
              </Form.Text>
            </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        className="formLogin"
 type="password"
 placeholder="Password"
 name="password"
 required
 onChange={(e) => setPassword(e.target.value)}        />
      </Form.Group>
     
      <Button className="buttonSubmitLogin" variant="success" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
    </div>
  <Container  className="d-flex justify-content-center">
    <div className="lienInscription">
<p className="pLogin"> si vous n'êtes pas inscrits, merci de cliquer :
<Link to={"/SignInPage"}><button className="buttonInscription">Inscription</button></Link></p>
    </div>
   
    </Container>
    
    </>
}
 
export default LoginPage;
