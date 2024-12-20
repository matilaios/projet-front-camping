import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import ActiviteService from '../Services/ActiviteService';
import Accordion from 'react-bootstrap/Accordion';
import { Button, Container, ListGroup } from 'react-bootstrap';
import AuthContext from '../Context/AuthContext';
import AuthService from '../Services/AuthService';
import { Navigate, useNavigate } from 'react-router-dom';

const ActivitePage = () => {
    const user = AuthService.getUser(); 
    const navigate = useNavigate();
    // const {isAuthentificated, user} = useContext(AuthContext);
    console.log(user);
    

    const [typeActivites, setTypeActivites] = useState([]); // Liste des types d'activités
    const [activitesByType, setActivitesByType] = useState({}); // Stocker les activités par idType

    // Récupérer tous les types d'activités
    const fetchAllTypeActivites = async () => {
        try {
            const response = await ActiviteService.getAllTypeActivites();
            setTypeActivites(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Récupérer les activités pour un idType spécifique
    const fetchActivitesByType = async (idType) => {
        console.log("j'entre dans la fonciton par activite apr type");

        try {
            // Si les données sont déjà chargées, on ne refait pas l'appel API
            if (activitesByType[idType]) return;

            const response = await ActiviteService.getAllActivitesByIdType(idType);
            console.log("le type de l'activité est : " +response.data[0].idType);
    
            // Ajouter les activités dans l'objet activitesByType
            setActivitesByType((prevState) => ({
                ...prevState,[idType]: response.data
            }));

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllTypeActivites();
    }, []);

    function handleEdit(idActivite) {
       navigate("/EditactivitePage/" + idActivite);
      }
    

    return <>
    <Container>


            <h1 style={{ color: 'white' }}>Liste des types d'activité</h1>

            <Accordion defaultActiveKey="0">
                {typeActivites.map((type) => (
                    <Accordion.Item key={type.idType} eventKey={type.idType}>
                        <Accordion.Header onClick={() => fetchActivitesByType(type.idType)}>
                            {type.nomType}
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                
                                {activitesByType[type.idType] ? (
                                    activitesByType[type.idType].map((activite) => (
                                        <ListGroup.Item key={activite.idActivite}>
                                            <section>{activite.nomActivite}</section>
                                            <section className='activiteButton'>{activite.description+" / "+" "+activite.prix + "  € "+activite.typePrix} {user.role===1 ? (
                                            <>
                                           <div className='lesbutton'>
                                            <Button variant="primary" onClick={() => handleEdit(activite.idActivite)}> Modifier</Button>
                                            <Button variant="danger">Supprimer</Button>
                                            </div>
                                            </>
                                            ):(<></>)}</section>
                                            
                                        </ListGroup.Item>
                                    ))
                                ) : (
                                    <p style={{ color: 'gray' }}>Chargement...</p>
                                )}
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            </Container>
        </>
    
};


export default ActivitePage;
