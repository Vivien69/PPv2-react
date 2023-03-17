import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    }
});


// export const asyncLocalStorage = {
//     setItem: function (key, value) {
//         return Promise.resolve().then(function () {
//             localStorage.setItem(key, value);
//         });
//     },
//     getItem: function (key) {
//         return Promise.resolve().then(function () {
//             return localStorage.getItem(key);
//         });
//     }
// };


 
export default http;