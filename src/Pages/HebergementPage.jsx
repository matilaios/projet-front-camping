import Button from 'react-bootstrap/Button';
import NavBar from '../Components/NavBar';
import MyFooter from '../Components/Footer';
import HebergementCard from '../Components/HebergementCard';
import HebergementService from '../Services/HebergementService';
import { useEffect, useState } from 'react';

const HebergementPage = () => {
    const [data, setData] = useState([]); // État pour stocker les données
    const [error, setError] = useState(null); // État pour gérer les erreurs


    const fetchData = async () => {
        try {
            const response = await HebergementService.getAllHebergements();
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
    
        <h1>HebergementPage</h1>
        <div className='d-flex justify-content-center gap-3'>
        <div>
                    {data.map((item) => (
                        <div key={item.idHebergement} className='hebergementCard'>
                            <h2>{item.hebergement_nom}</h2>
                        </div>
                    ))}
                </div>
        </div>
    
    </>;
}
 
export default HebergementPage;