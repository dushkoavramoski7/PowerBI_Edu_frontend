import axios from 'axios';

const instance = axios.create({
    baseURL: "https://powerbi-edu.azurewebsites.net/api",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    }
});
export default instance;