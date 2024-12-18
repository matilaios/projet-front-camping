import axios from "axios";

function getAllTypesHebergements() {
    return axios.get(`http://localhost:3000/campingpong/readTypeHebergement`);
  }

function getTypeHebergementById(idTYPE){
    return axios.get('http://localhost:3000/campingpong/readTypeHebergementById/' + idTYPE);
  }

  export default { getAllTypesHebergements, getTypeHebergementById };