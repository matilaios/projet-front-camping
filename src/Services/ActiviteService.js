import axios from "axios";

function getAllActivites(){
    return axios.get(`http://localhost:3000/campingpong/readActivite`);
}

export default {getAllActivites};