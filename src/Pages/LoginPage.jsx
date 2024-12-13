import { useContext, useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import UserService from "../Services/UserService";
import AuthService from "../Services/AuthService";
// import LogoutButton from "../Components/LogoutButton.jsx";
import NavBar from "../Components/NavBar";
import MyFooter from "../Components/Footer";

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
      alert("connexion réussie");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("erreur lors de la connexion");
      // navigate('/loginpage');
    }
  };

  return (
    <>
      <NavBar />
      <div className="headerLoginPage"></div>
      <div className="d-flex flex-column align-item-center">
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
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
        type="password" 
        placeholder="Password" 
        name={"password"} 
        onChange={(e) => setPasswordUser=(e.target.value)} required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
    
    <MyFooter/>
    </>;
}
 
export default LoginPage;
