import axios from 'axios';


const Api = axios.create({
    baseURL: "https://dummyjson.com",
});

export default Api;