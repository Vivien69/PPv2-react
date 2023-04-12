import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const csrf = async () => {
    const csrfToken = getCookie('XSRF-TOKEN');
    if(!csrfToken)
        await http.get('/sanctum/csrf-cookie');

}

function getCookie(name) {
    if (!document.cookie) {
      return null;
    }
  
    const xsrfCookies = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));
  
    if (xsrfCookies.length === 0) {
      return null;
    }
    return decodeURIComponent(xsrfCookies[0].split('=')[1]);
  }

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