import axios from 'axios';

    export const httpClient = 
        axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`,
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    httpClient.interceptors.request.use((config) => {
        const token = localStorage.getItem('token')
        config.headers.Authorization = `Bearer ${token}`
        return config;
    })

    httpClient.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        const {response} = error;
        if(response.status === 401) {
            localStorage.removeItem('token')
        }

        throw error;


        
    });

 export default httpClient;