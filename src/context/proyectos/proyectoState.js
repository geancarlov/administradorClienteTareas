// cliente_mern > src > context > proycetos > proyectoSatate.js 
import React, {useReducer} from 'react';
import proyectoContext from './proyectoContext'; 
import proyectoReducer from './proyectoReducer'; 
// par interactuar con la bd 
import clienteAxios from '../../config/axios'

import { FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTOS, 
        VALIDAR_FORMULARIO, 
        PROYECTO_ACTUAL,
        ELIMINAR_PROYECTO,
        PROYECTO_ERROR
    } from '../../types';



const ProyectoState = props => { 
        
    
    
    const initialState = { 
        proyectos : [ ],
        formulario : false,
        errorformulario: false, 
        proyecto: null, 
        mensaje: null
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState); 


    // funciones de CRUD 
    const mostrarFormulario = () => { 
        dispatch({ 
            type: FORMULARIO_PROYECTO
        })
    }
    

    // obtenemos los proyectos de la base de datos
    const obtenerProyectos = async () => { 
        try {
            // lo extreamos del servidor siempre con await 
            // ya no le pasamos nada por que trae el usario aunteicado 
            // esto viene del backend 
            const resultado = await clienteAxios.get('/api/proyectos');
            // pasamos data y luefo proecto por como se enviar el json
            dispatch({ 
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })    
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error', 
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR, 
                payload:  alerta 
            })
        }
        
        
    }
    

    //ponemos async para que carge y envie los datos 
    const agregarProyecto = async proyecto => { 
        try {
            // en este punto pasamos la peticion y el objeto del proyccto
            // q es lo que espera el backend
            const resultado = await clienteAxios.post('/api/proyectos', proyecto); 
            // pasamos el resutaldo de que viene del rest api
            dispatch({ 
                type: AGREGAR_PROYECTOS, 
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error', 
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR, 
                payload:  alerta 
            })
        }

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
    const eliminarProyecto = async proyectoId => {
        try {
            // como el bakend pasamos este con el id del proyecto
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`); 
            dispatch({ 
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error', 
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR, 
                payload:  alerta 
            })
        }
    }



    return ( 
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mensaje: state.mensaje,
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
 