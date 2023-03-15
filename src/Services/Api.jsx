import axios from 'axios';
 
const http = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    }
});

const csrf = () => http.get('/sanctum/csrf-cookie');
 
export default http;