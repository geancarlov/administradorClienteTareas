// cliente_mern > src > config > token.js

import axios from 'axios'; 

const clienteAxios = axios.create({ 
    // cuando se registra la app
    // solo se realiza el deploy del cliente
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default clienteAxios; 
