
import { useEffect, useState } from 'react';
import TypeHebergementService from '../Services/TypeHebergementService';
import HebergementCard from '../Components/HebergementCard';
import { Container } from 'react-bootstrap';

const HebergementPage = () => {
    const [data, setData] = useState([]); // État pour stocker les données
    const [error, setError] = useState(null); // État pour gérer les erreurs


    const fetchData = async () => {
        try {
            const response = await TypeHebergementService.getAllTypesHebergements();
            console.log('Données reçues:', response.data);
            setData(response.data); // Mise à jour de l'état avec les données récupérées
        } catch (err) {
            console.error('Erreur lors de la récupération des données:', err);
            setError('Une erreur est survenue lors de la récupération des données.');
        }
    };

    useEffect(() => {
        fetchData(); 
    }, []); 

    return <>
    
        <h1 className='d-flex justify-content-center text-white'>Liste des hébergements</h1>
        <div className='multicard'>
        {data.map((item) => (
        <HebergementCard HebergementCard={item} key={item.id}/>
    ))}
        </div>
    </>;
}
 
export default HebergementPage;