
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ActiviteService from '../Services/ActiviteService';
import Accordion from 'react-bootstrap/Accordion';
import { Container, ListGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const ActivitePage = () => {
    const[activites, setactivites] = useState([]);
    const[typeActivites, setTypeActivites] = useState([]);
    const [activiteByType, setActiviteByType] = useState();



    const fecthAllTypeActivites = async ()=>{
        try {
            const response = await ActiviteService.getAllTypeActivites();
            setTypeActivites(response.data);
        } catch (error) {
            console.log(error);
        }
    }




    const fetchAllActivites = async ()=>{
        try {
            const response = await ActiviteService.getAllActivites();
            // console.log(response.data[0].idType);
            setactivites(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }


        const fetchAllActivitesByIdType = async (idType)=>{
            try {
                const response = await ActiviteService.getAllActivitesByIdType(idType);
                console.log("j'entre dans la fonciton par activite apr type");
                console.log("le type de l'activité est : " +response.data[0].idType);
                console.log(response.data);
                setActiviteByType(response.data);
                
            } catch (error) {
                console.log(error);
                
            }
        }
       

useEffect(()=>{
    fecthAllTypeActivites()
}, []);
    


useEffect(()=>{
    fetchAllActivites()
}, []);



    return <>
    <h1  style={{ color: 'white'}}>liste des types d'activité</h1>


    {typeActivites && typeActivites.map((typeActivites)=>{

        return<>
 {/* <div style={{ color: 'white'}} key={typeActivites.idType} onClick={()=>fetchAllActivitesByIdType(typeActivites.idType)}> */}

{/* {activiteByType && activiteByType.map((activiteByType)=>{
    return<>
   {activiteByType.nom}
    </>
})} */}

<Accordion defaultActiveKey="0">
      <Accordion.Item key={typeActivites.idType}>
        <Accordion.Header  onClick={()=>fetchAllActivitesByIdType(typeActivites.idType)} >{typeActivites.nomType} je suis ici</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
            {activiteByType && activiteByType.map((activiteByType)=>{
    return<ListGroup.Item key={activiteByType.idActivite}>{activiteByType.nomActivite}</ListGroup.Item>

})}

      
    </ListGroup>


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>




{/* </div> */}


        </>
    })}



    
    </>;
}
 
export default ActivitePage;