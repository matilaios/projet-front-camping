import { useEffect, useState } from "react";
import TypeHebergementService from "../Services/TypeHebergementService";
import { use } from "react";
import { useParams } from "react-router-dom";

const HebergementDetailPage = () => {

    const { id } = useParams()
    const [data, setData] = useState([]); // État pour stocker les données
    const [error, setError] = useState(null); // État pour gérer les erreurs


    const fetchHebergementById = async () => {
        try {
            const response = await TypeHebergementService.getTypeHebergementById(id);
            console.log('Données reçues:', response);
            setData(response.data); // Mise à jour de l'état avec les données récupérées
        } catch (err) {
            console.error('Erreur lors de la récupération des données:', err);
            setError('Une erreur est survenue lors de la récupération des données.');
        }
    };

useEffect(() => {
    fetchHebergementById();
},[]);

  return (
    <>
      <div>
        <h1 className="text-white">Détail de votre hébergement</h1>
        <div className='d-flex justify-content-center gap-3'>
        {data.map((item) => (
            <p>{item.nom}</p>
    ))}
        </div>
      </div>
    </>
  );
};

export default HebergementDetailPage;
