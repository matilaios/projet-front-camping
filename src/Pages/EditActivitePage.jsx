import { useParams } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { useEffect, useState } from 'react';
import ActiviteService from '../Services/ActiviteService';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ButtonGroup, Container, Dropdown, DropdownButton } from 'react-bootstrap';


const EditActivitePage = () => {
    const user = AuthService.getUser(); 
    // console.log(user);

    const {idActivite}=useParams();
    // console.log(idActivite);
    const [activite, setActivite] = useState([]);
    const [typeActivites, setTypeActivites] = useState([])
    // console.log("page pour modifier les activites");
    
    


    const fetchDetailActiviteById = async ()=> {
        try {
            const response = await ActiviteService.getActiviteById(idActivite);
            // console.log("je suis au debut de ma fonction detailactivité");
            setActivite(response.data[0]);
        } catch (error) {
         console.log(error);
        }
    }

    const fetchAllType = async ()=>{
        try {
            const responseType = await ActiviteService.getAllTypeActivites();
           setTypeActivites(responseType.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setActivite({ ...activite, [event.target.name]: event.target.value });
        
        // console.log(activite);
      };

      const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(activite);

        try {
            const response = await ActiviteService.updateActivite(idActivite, activite)
            console.log(response);
            
        } catch (error) {
            console.log(error);
        }
      };


    useEffect(()=>{
        fetchDetailActiviteById(),
        fetchAllType()
        },[idActivite]);
    
    return <>
    <h1 style={{ color: 'white' }}>Modification de l'activité {activite.nom.toUpperCase()}</h1>

<Container>
<Form className="col-10 mb-3" onSubmit={handleSubmit}>

    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Nom de l'activité</InputGroup.Text>
        <Form.Control
          defaultValue={activite.nom}
          aria-label="Activité"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="nom"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Description de l'activité</InputGroup.Text>
        <Form.Control
          defaultValue={activite.description}
          aria-label="decription activité"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="description"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Prix de l'activité</InputGroup.Text>
        <Form.Control
          defaultValue={activite.prix}
          aria-label="prix activité"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="prix"
        />
        <InputGroup.Text id="basic-addon2"> € </InputGroup.Text>
        <InputGroup.Text id="basic-addon3">
        <Form.Control
          defaultValue={activite.typePrix}
          aria-label="type de prix activité"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="typePrix"
        />
        </InputGroup.Text>
      </InputGroup>

      {/* <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Type de l'activié</InputGroup.Text>
        <Form.Control
          defaultValue={activite.nomType}
          aria-label="Type d'activité"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="activite.nomType"
        />
      </InputGroup> */}


      <Form.Select aria-label="Default select example" onChange={handleChange} name="idType" value={activite.idType}>

{typeActivites && typeActivites.map((typeActivite)=>{
return<>
      <option key={typeActivite.idType}  value={typeActivite.idType} >{typeActivite.nomType}</option>
</>

})}
    </Form.Select>






      <Form.Control
          type="submit"
          value="Mettre à jour"
          className="btn-btn-primary"
        />
 
 </Form>



          
</Container>










    </>
    
    
    

}
 
export default EditActivitePage;