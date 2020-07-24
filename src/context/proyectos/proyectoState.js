import React, {useReducer} from 'react';
import proyectoContext from './proyectoContext'; 
import proyectoReducer from './proyectoReducer'; 
// como el nombre en types es index.js no se pone el nombre del archivo 
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';




// compoenent solo para los satate del proeyceto
const ProyectoState = props => { 
    
    // lo ponemo temporalmente por que viene desde una bd 
    const proyectos = [ 
        {id: 1, nombre: 'Tienda Virtual'}, 
        {id: 2, nombre: 'Intranet'}, 
        {id: 3, nombre: 'Diseño de Sitio Web'}
    ]
    
    
    // sate incial para cambiar el apartado de nuevo proyecto
    const initialState = { 
        proyectos : [ ],
        formulario : false 
    }

    // dipach para ejecutar las acciones, 
    // es nuveo hook, que se utilzia en vez que redux, que regresa el estate el dispatch
    const [state, dispatch] = useReducer(proyectoReducer, initialState); 

    // serie de funciones para el CRUD 
    
    // creador de acciones 
    // funcionde del dispathc del type, para que llemae el reduce
    const mostrarFormulario = () => { 
        dispatch({ 
            type: FORMULARIO_PROYECTO
        })
    }

    // creacdor de accion ---> para obtener proyectos
    // el paulos son los proyectos, la data que se envia ademas del type
    const obtenerProyectos = () => { 
        dispatch({ 
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
        
    }


    // nacen los datos 
    return ( 
        <proyectoContext.Provider
            value={{
                // se pone . y luego el state por que lo otbeneomos desde el useReducer 
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
 