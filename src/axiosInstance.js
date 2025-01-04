// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://battlegame-b3hrdngqhkcehbft.canadacentral-01.azurewebsites.net/api',  // Your backend API URL
});

export default axiosInstance;
