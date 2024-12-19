import axios from "axios";

function getAllTarif(){
    return axios.get('http://127.0.0.1:3000/campingpong/readAllTarifAllHebergement');
}

function getTarifById(idTarif){
    return axios.get('http://127.0.0.1:3000/campingpong/readTarifById/'+idTarif);
}

function updateTarifByID(idTarif, updateTarif){
    return axios.post('http://127.0.0.1:3000/campingpong/updateTarifByID/'+idTarif, updateTarif);
}


export default {getAllTarif, getTarifById,updateTarifByID};





