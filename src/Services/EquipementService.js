import axios from "axios";

function getAllEquipements() {
    return axios.get(`http://localhost:3000/campingpong/lectureEquipement`);
  }

  export default { getAllEquipements };