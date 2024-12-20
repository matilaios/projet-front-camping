import axios from "axios";

function getAllOptions() {
    return axios.get(`http://localhost:3000/campingpong/readOption`);
  }

function getOptionById(id){
    return axios.get('http://localhost:3000/readOptionById/' + id);
  }

  export default { getAllOptions, getOptionById };