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

function updateActivite(idActivite, updateActivite) {
    return axios.post('http://127.0.0.1:3000/campingpong/updateActiviteById/'+ idActivite, updateActivite);
}

function deleteActiviteById(idActivite){
    return axios.delete('http://127.0.0.1:3000/campingpong/deleteActiviteById/'+ idActivite);
}

function addActivite(){
    return axios.post('http://127.0.0.1:3000/campingpong/createActivite');
}


export default { 
    getAllTypeActivites,
    getAllActivitesByIdType,
    getActiviteById,
    updateActivite, 
    deleteActiviteById,
    addActivite
};