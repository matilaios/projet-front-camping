import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import TypeHebergementService from "../Services/TypeHebergementService";



const DetailHebergementPage = () => {
    const { idTYPE } = useParams();
    const [hebergement, setHebergement] = useState([]);
    console.log("jsuis la");
    console.log(idTYPE);

    const fetchHebergementById = async () => {
        try {
            const response = await TypeHebergementService.getTypeHebergementById(idTYPE);
            console.log(response);
            setHebergement(response.data)
            console.log(hebergement);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchHebergementById()
    }, []);


    return <>

<div>
        <h1>Détails de l'hébergement</h1>
        <p><strong>ID :</strong> {hebergement.idTYPE}</p>
        <p><strong>Nom :</strong> {hebergement.nom}</p>
        <p><strong>Description :</strong> {hebergement.description}</p>
        <p><strong>Capacité :</strong> {hebergement.capacite}</p>
    </div>
              
    </>
}

export default DetailHebergementPage;
