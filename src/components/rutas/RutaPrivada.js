// cliente_mern > src > components > rutas > RutaPrivada.js 

import React, { useContext, useEffect, Component } from 'react'; 
import { Route, Redirect } from 'react-router-dom'; 
import  AuthContext from '../../context/autentificacion/authContext';

// creamos el higer order component, 
// el cual va tener otro componente y va tomar sus props 
const RutaPrivada = ({ component: Component, ...props }) => { 
    
    const authContext = useContext(AuthContext);
    // extrameos el usario aunteticado por que cuando recarmados se pierde por niguno lo llama 
    // le ponemos cargando para otro bandera, para que cuadno se cargue no se ve ese falsh
    const { autenticado, cargando,usuarioAutenticado } = authContext; 
    useEffect(() => {
        usuarioAutenticado();
    }, [])

    return ( 
        // el router sirve en vez de renrder, loq ue realizamos 
        // aqa es q un componente toma como input otro componente
        // luego le podemos poner una condicion, para que si no esta 
        // auntenticado le envio a pantalla principal
        <Route {...props } render = { props => !autenticado && !cargando ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        ) } />

    );
}

export default RutaPrivada;