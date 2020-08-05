// context > alertas > alertaState.js

import React, { useReducer } from 'react';
import alertaContext from './alertaContext'; 
import alertaReducer from './alertaReducer'; 

import {MOSTRAR_ALERTA, OCULTAR_ALERTA  } from '../../types';


const AlertaState = props => { 
    const initialState = {
        alerta: null
    }

    const [ state, dispatch] = useReducer(alertaReducer, initialState);
    
    // agegamamso la funcion, toma dos parametros 
    // apara poner el mesnaje y el atcaterogita para poner la clase
    // asi se muestra toda el componente
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg, 
                categoria
            }
        }); 

        // depeus de 5 segindos limpia la alerta, es decir quitamos l 
        // la alerta 
        setTimeout(() => {
            dispatch({ 
                type: OCULTAR_ALERTA 
            })
        }, 5000)
    }

    return ( 
        <alertaContext.Provider
            value={{ 
                alerta: state.alerta, 
                mostrarAlerta
            }}
        > 
            {/* esto es esecncial pro que si se omite
            no permiete rederizar de nada del arbol de 
            los componentes  */}
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState; 