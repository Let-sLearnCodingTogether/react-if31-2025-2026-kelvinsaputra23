import axios from "axios";



const http = axios.create({
    baseURL:"http://192.168.5.6:8000/api ",
    headers : {
        accept : "application/json"
    }



})

export default http
