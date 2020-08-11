// tareaState.js
import React, {useReducer} from 'react'; 
import TareaContext from './tareaContext'; 
import TareaReducer from './tareaReducer'; 

import { 
    TAREAS_PROYECTO, 
    AGREGAR_TAREA, 
    VALIDAR_TAREA, 
    ELIMINAR_TAREA, 
    TAREA_ACTUAL, 
    ACTUALIZAR_TAREA, 
    LIMPIAR_TAREA
} from '../../types';

// importamos el puente del backend con fronted
import clienteAxios from '../../config/axios';

const TareaState = props => {

    const initialState = {
        tareasproyecto: [], 
        errortarea: false, 
        tareaseleccionada: null
    }

    const [state, dispatch ] = useReducer(TareaReducer, initialState)

    
    // enlistar todas la tareas
    const obtenerTareas = async proyecto => { 
        
        try {
            // pasamos como paramtero el proyecto, esto como se pone en llaves 
            // significa q proyecto y proyecto son iguales

            const resultado = await clienteAxios.get('/api/tareas', {params: { proyecto }});
            
            dispatch({ 
                type: TAREAS_PROYECTO, 
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error);
            console.log('en obtner tareas');
        }
        
        
    }
    
    // lo sacmos del bacekdn
    const agregarTarea = async (tarea) => { 
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            
            dispatch({
                type: AGREGAR_TAREA, 
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error);
            console.log('Agreagr atreas');
        }
        
    }

    const validarTarea = () => {
        dispatch({
              type: VALIDAR_TAREA
        })
    }

    // en esta parte pasamos el id de la tarea y el id del proeycto
    const eliminarTarea = async(id, proyecto)  => { 
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, {params: {proyecto}})
            dispatch({ 
                type: ELIMINAR_TAREA, 
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }
    // le hacemos asincrono
    const actualziarTarea = async tarea => { 
        try {
            // le pasamos el adi a actualziar y luego la atarea completa para reescribirla
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            dispatch({ 
                type: ACTUALIZAR_TAREA, 
                payload: resultado.data.tarea 
            })
        } catch (error) {
            console.log(error)
        }
    }
 
    const guardarTareaActual = tarea => { 
        dispatch({ 
            type: TAREA_ACTUAL, 
            payload: tarea
        })
    }

  

    const limpiarTarea = () => { 
        dispatch({ 
            type: LIMPIAR_TAREA
        })
    }


    return (
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas, 
                agregarTarea, 
                validarTarea, 
                eliminarTarea,  
                guardarTareaActual, 
                actualziarTarea, 
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;