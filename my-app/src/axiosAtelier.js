import axios from 'axios';
const apiKey = process.env.REACT_APP_KEY;

const axiosAtelier = axios.create();

axiosAtelier.interceptors.request.use((config) => {
  config.headers.Authorization = apiKey;
  return config
})

export default axiosAtelier;