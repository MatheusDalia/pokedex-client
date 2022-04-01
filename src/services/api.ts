import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokemon-md-db.herokuapp.com'
});

export default api;
