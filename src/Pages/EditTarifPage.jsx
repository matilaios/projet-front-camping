import { useParams } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { useEffect, useState } from "react";
import TarifServices from "../Services/TarifServices";
import { Button, Container, Form, InputGroup, ListGroup } from "react-bootstrap";

const EditTarifPage = () => {
    const user = AuthService.getUser(); 
    // console.log(user);

    const {idTarif}=useParams();
    // console.log(idTarif);
    const [updateTarif, setUpdatetarif] = useState({});
    // console.log("page pour modifier les tarifs");

    const fetchDetailTarifById = async () =>{
        try {
            // console.log("j'entre dans mon fetch");
            
            const response = await TarifServices.getTarifById(idTarif);
        //    console.log("j affiche mes reponses");
           console.log(response.data);
           
           setUpdatetarif(response.data[0]);
            
        } catch (error) {
            console.log(error);
            
        }
         }
    

 const handlechange = (event)=>{
    console.log(event.target.value);
    setUpdatetarif({...updateTarif, [event.target.name] : event.target.value});
    // console.log(updateTarif);
    
 }

 const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
       
        const response = await TarifServices.updateTarifByID(idTarif, updateTarif)
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
 }

    

useEffect(()=>{
    fetchDetailTarifById()
}, [idTarif]);

    return <>
    <Container>



    <InputGroup className="mb-3">
        <Form.Control
          defaultValue={updateTarif.nom}
          type="text"
          name="nom"
          value={updateTarif.nom}
          onChange={handlechange}
        />
        <Form.Control
          defaultValue={updateTarif.HEBERGEMENTS}
          type="text"
          name="HEBERGEMENTS"
          value={updateTarif.HEBERGEMENTS}
        />
         <Form.Control
          defaultValue={updateTarif.prix}
          type="text"
          name="prix"
          value={updateTarif.prix}
          onChange={handlechange}
        />
      <InputGroup.Text id="basic-addon2"> € par nuit</InputGroup.Text>
      <InputGroup.Text  id="basic-addon2">
      <Form.Control
      onSubmit={handleSubmit}
          type="submit"
          value="Mettre à jour"
          className="btn-btn-primary"
        />
       </InputGroup.Text>



      </InputGroup>


 






        </Container>
    </>
}
 
export default EditTarifPage;