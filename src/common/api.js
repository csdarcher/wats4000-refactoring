// Base API Configuration

import axios from 'axios';

export const API = axios.create({
   baseURL: '//api.openweathermap.org/data/2.5/' 
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.
    config.params.APPID = '682718bc9e0b83338b317c3944748986';
    config.params.units = 'imperial';

    return config; 
}, function (error) {
    return Promise.rejection(error);
});