import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import NavBar from '../Components/NavBar';
import MyFooter from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { useEffect, useState } from 'react';
import TarifServices from '../Services/TarifServices';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';




const TarifPage = () => {
    const user = AuthService.getUser(); 
    const navigate = useNavigate();
    console.log(user);

    const [tarifs, setTarifs] = useState([]);

    console.log("je suis avant ma fonction");

    const fecthAllTarif= async ()=>{
        try {
            const response = await TarifServices.getAllTarif();
            console.log("je suis avant mon log de response");
            console.log(response.data);
            
            setTarifs(response.data);
            
            
        } catch (error) {
            console.log(error);
            
        }
    };

useEffect(()=>{
    fecthAllTarif()
}, []);


function handleEdit(idTarif) {
  console.log("je clique sur le bouton de l'id"+idTarif);
  
  
  navigate("/EditTarifPage/" + idTarif);
 }


    return <Container>
   
     
    {/* <h1 style={{ color: 'white' }}>test TarifPage</h1> */}
    {/* {tarifs && tarifs.map((tarif)=>{
        return<>
        <p style={{ color: 'white' }}>
             {tarif.nomType}
        {tarif.capacite}
        {tarif.nom}
        {tarif.prix}
        </p>
                   {tarifs && tarifs.map((tarif)=>{
        return <> */}

        <Table striped bordered hover>
            
      <thead>
        <tr>
          <th>Type de logement</th>
          <th>Capacité</th>
          <th>Pleine Saison / la nuitée</th>
          <th>Hors Saison / la nuitée</th>
          {user.role===1 ? (
            <>       
          <th></th>
          <th><Button variant="primary" onClick={() => handleEdit(idTarif)}>AJOUTER UN TARIF</Button></th>
          </>
        ):(<></>)}
        
        

                                  



        </tr>
      </thead>
        <tbody>
        {tarifs && tarifs.map((tarif)=>{
        return <>


        <tr>
          <td>{tarif.nomType}</td>
          <td>{tarif.capacite}</td>
          <td>{tarif.prix} € </td>
          <td>{tarif.prix*0.6} € </td>
          {user.role===1 ? (
            <>       
          <td><Button variant="primary" onClick={() => handleEdit(tarif.idTarif)}> modifier</Button> </td>
          <td><Button variant="danger">supprimer</Button></td>

          </>
        ):(<></>)}




        </tr>
        </>
   })};

        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
   
      </tbody>
    
    </Table>
  
  








 
   
    </Container>
}
 
export default TarifPage;