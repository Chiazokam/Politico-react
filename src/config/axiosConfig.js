import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://politico-voting-app.herokuapp.com/api/v1',
  
});


export default axiosInstance;
