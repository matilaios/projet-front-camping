
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ActiviteService from '../Services/ActiviteService';


const ActivitePage = () => {
    const[activite, setactivite] = useState([]);

    const fetchAllActvites = async ()=>{
        try {
            const response = await ActiviteService.getAllActivites();
            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        }
    }

useEffect(()=>{
    fetchAllActvites()
}, []);

    return <>
    <h1  style={{ color: 'white'}}>liste des activités</h1>
    
    
    
    </>;
}
 
export default ActivitePage;