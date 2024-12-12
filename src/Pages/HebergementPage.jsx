import Button from 'react-bootstrap/Button';
import NavBar from '../Components/NavBar';
import MyFooter from '../Components/Footer';
import HebergementCard from '../Components/HebergementCard';
import HebergementService from '../Services/HebergementService';
import { useEffect, useState } from 'react';

const HebergementPage = () => {

    const [hebergement, setHebergement] = useState([]);

    const fetchHebergements = async () => {
        try {
            const response = await HebergementService.getAllHebergements();

            console.log(response);
            // const res = response.data.results;

            // setHebergement(res);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchHebergements;
    }, []);

    return <>
    <NavBar/>
        <h1>HebergementPage</h1>
        <div className='d-flex justify-content-center gap-3'>
        <HebergementCard HebergementCard={hebergement} key={hebergement.id}/>
        <HebergementCard/>
        <HebergementCard/>
        </div>
    <MyFooter/>
    </>;
}
 
export default HebergementPage;