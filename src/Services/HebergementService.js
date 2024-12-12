function getAllHebergements() {
    return axios.get(`http://localhost:3000/readHebergement`);
  }

function getHebergementDetails(id){
    return axios.get('http://localhost:3000/redHebergementById/' + id);
  }

  export default { getAllHebergements, getHebergementDetails };