import axios from "axios";

function getAllHebergements() {
    return axios.get(`http://localhost:3000/campingpong/readHebergement`);
  }

function getHebergementDetails(id){
    return axios.get('http://localhost:3000/redHebergementById/' + id);
  }

  export default { getAllHebergements, getHebergementDetails };