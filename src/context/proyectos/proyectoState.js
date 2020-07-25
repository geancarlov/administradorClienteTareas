import React, {useReducer} from 'react';
import uuid from 'uuid/dist/v4';
import proyectoContext from './proyectoContext'; 
import proyectoReducer from './proyectoReducer'; 

import { FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTOS, 
        VALIDAR_FORMULARIO, 
        PROYECTO_ACTUAL,
        ELIMINAR_PROYECTO
    } from '../../types';



const ProyectoState = props => { 
        
    const proyectos = [ 
        {id: 1, nombre: 'Tienda Virtual'}, 
        {id: 2, nombre: 'Intranet'}, 
        {id: 3, nombre: 'Diseño de Sitio Web'}
    ]
    
    const initialState = { 
        proyectos : [ ],
        formulario : false,
        errorformulario: false, 
        proyecto: null
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState); 


    // funciones de CRUD 
    const mostrarFormulario = () => { 
        dispatch({ 
            type: FORMULARIO_PROYECTO
        })
    }
    const obtenerProyectos = () => { 
        dispatch({ 
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
        
    }
    const agregarProyecto = proyecto => { 
        proyecto.id =  uuid();
        dispatch({ 
            type: AGREGAR_PROYECTOS, 
            payload: proyecto
        })


    }

    const mostratError = () => { 
        dispatch({ 
            type: VALIDAR_FORMULARIO
        })
    }

    // selecciona el proyecto q el usario le dio click 
    const proyectoActual = proyectoId => { 
        dispatch({ 
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // funcion de elimanr proyecto 
    const eliminarProyecto = proyectoId => {
        dispatch({ 
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }



    return ( 
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos, 
                agregarProyecto,
                mostratError, 
                proyectoActual, 
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
 