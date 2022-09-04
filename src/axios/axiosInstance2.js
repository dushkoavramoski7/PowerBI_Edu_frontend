import axios from 'axios';

const instance2 = axios.create({
    baseURL: "https://powerbi-edu2.azurewebsites.net/api",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    }
});
export default instance2;