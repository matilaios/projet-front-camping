import axios from "axios";

function createResa(resa){
    return axios.post("http://127.0.0.1:3000/campingpong/createReservation", resa);
}

export default {createResa}