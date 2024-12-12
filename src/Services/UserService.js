import axios from "axios";

function createUser(user){
    return axios.post("http://127.0.0.1:3000/campingpong/createUser", user)
}

function loginUser(user){
    return axios.post("http://127.0.0.1:3000/campingpong/loginUser", user)
}

export default {createUser, loginUser}