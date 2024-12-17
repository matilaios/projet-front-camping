import axios from "axios";

function getAllTypesHebergements() {
    return axios.get(`http://localhost:3000/campingpong/readTypeHebergement`);
  }

function getTypeHebergementById(id){
    return axios.get('http://localhost:3000/campingpong/readHebergementById/' + id);
  }

  export default { getAllTypesHebergements, getTypeHebergementById };