import axios from "axios";

// function getAllActivites(){
//     return axios.get(`http://localhost:3000/campingpong/readActivites`);
// }

function getAllTypeActivites(){
    return axios.get("http://127.0.0.1:3000/campingpong/readTypeActivites");
}

function getAllActivitesByIdType(idType){
    return axios.get("http://127.0.0.1:3000/campingpong/readActiviteByIdType/"+ idType);
}

function getActiviteById(idActivite){
    return axios.get('http://127.0.0.1:3000/campingpong/readActiviteById/'+idActivite);
}



export default { getAllTypeActivites, getAllActivitesByIdType, getActiviteById};