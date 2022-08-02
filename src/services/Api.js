import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ifnews.herokuapp.com/'
});

export default api;