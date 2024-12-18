import { useParams } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { useEffect, useState } from 'react';
import ActiviteService from '../Services/ActiviteService';


const EditPage = () => {
    const {idActivite}=useParams();
    console.log(idActivite);
    const [activite, setActivite] = useState([]);
    const [typeActivite, setTypeActivite] = useState()
    const {user} = AuthService.getUser(); 
    
    console.log("page pour modifier les activites");
    console.log(user);
    
    


    const fetchDetailActiviteById = async ()=> {
        try {
            const response = await ActiviteService.getActiviteById(idActivite);
            console.log(response.data);
            
            // setActivite(response.data);
            
        } catch (error) {
         console.log(error);
            
        }
        
    }

    useEffect(()=>{
        fetchDetailActiviteById()
    },[]);
    
    return <>
    <h1 style={{ color: 'white' }}>page de modification d'activité</h1>
    
    
    
    </>;
}
 
export default EditPage;