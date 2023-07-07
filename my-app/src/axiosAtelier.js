import axios from "axios";
const apiKey = process.env.REACT_APP_KEY;
const apiURL = process.env.REACT_APP_API_BASE_URL;

const axiosAtelier = axios.create({
  baseURL: apiURL,
});

axiosAtelier.interceptors.request.use((config) => {
  config.headers.Authorization = apiKey;
  return config;
});

export default axiosAtelier;
