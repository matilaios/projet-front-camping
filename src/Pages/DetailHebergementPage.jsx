import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import TypeHebergementService from "../Services/TypeHebergementService";
import { Button, Container } from "react-bootstrap";


const DetailHebergementPage = () => {
    const { idTYPE } = useParams();
    const [hebergement, setHebergement] = useState([]);

    const fetchHebergementById = async () => {
        try {
            const response = await TypeHebergementService.getTypeHebergementById(idTYPE);
            console.log(response);
            console.log(response.data);
            setHebergement(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchHebergementById()
    }, []);


    return (
      <>
      <div className="buttonDetailBack">
      <Button variant="success" href="/hebergementPage">Retour</Button>
      </div>
      <div className="d-flex justify-content-around text-white">
      <h2>{hebergement.nom_hebergement}</h2>
        <h2 >Détails de l'hébergement</h2>
    </div>
        <div className="bodyDetail">
        
          {hebergement && (
            <div className="detailLeftPart">
              
    
              {hebergement.image ? (
                <img
                  src={`http://localhost:5173/${hebergement.image}`}
                  alt={hebergement.nom_photo}
                />
              ) : (
                <p>Aucune photo disponible.</p>
              )}
            </div>
          )}
          <div className="detailRightPart">
            <p>{hebergement.description_hebergement}</p>
            <p>Capacité : {hebergement.capacite_hebergement} personnes</p>
    
            <h3>Équipements :</h3>
            {hebergement.nom_equipement ? (
              <ul>
                <li>
                  <strong>{hebergement.nom_equipement} :</strong>{" "}
                  {hebergement.description_equipement}
                  {hebergement.quantite}
                </li>
                <li>Wifi</li>
                <li>Animaux autorisés</li>
              </ul>
            ) : (
              <p>Aucun équipement disponible pour cet hébergement.</p>
            )}
            <Button variant="success" href="/ResaPage">Reserver ce logement</Button>
          </div>
          
        </div>
        
      </>
    );
}

export default DetailHebergementPage;
