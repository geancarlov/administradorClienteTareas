// cliente_mern > src > config > token.js
import clienteAxios from './axios'; 

const tokenAuth = token => { 
    // si hay token le pone el header del envio, cualquier verbo incrustado
    if(token) { 
        clienteAxios.defaults.headers.common['x-auth-token'] = token; 
    } else { 
        // si no hay lo eliminamos del header del envio 
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth; 