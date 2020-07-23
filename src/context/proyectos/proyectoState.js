import React, {useReducer} from 'react';
import proyectoContext from './proyectoContext'; 
import proyectoReducer from './proyectoReducer'; 
// como el nombre en types es index.js no se pone el nombre del archivo 
import { FORMULARIO_PROYECTO } from '../../types';


// compoenent solo para los sate de proeyceto
const ProyectoState = props => { 
    // sate al principal para q se cambie
    const initialState = { 
        formulario : false 
    }

    // dipach para ejecutar las acciones, es como reducer de redux
    const [state, dispatch] = useReducer(proyectoReducer, initialState); 

    // serie de funciones para el CRUD 


    // nacen los datos 
    return ( 
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
 