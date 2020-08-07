// cliente_mern > src > context > proyectos > ProyectoReducer.js 

import { FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS, 
        AGREGAR_PROYECTOS, 
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL, 
        ELIMINAR_PROYECTO, 
        PROYECTO_ERROR
     } from '../../types'

export default (state, action) => { 
    switch(action.type) { 
        case FORMULARIO_PROYECTO : 
            return { 
                ...state, 
                formulario: true
            }
        case OBTENER_PROYECTOS: 
            return { 
                ...state, 
                proyectos: action.payload
            }
        case AGREGAR_PROYECTOS: 
            return { 
                ...state, 
                proyectos: [...state.proyectos, action.payload], 
                formulario: false ,
                errorformulario: false 
            }
        case VALIDAR_FORMULARIO: 
            return {
                 ...state, 
                errorformulario: true        
            }
        case PROYECTO_ACTUAL: 
            return { 
                ...state,
                //cuando da click se pasa el id, filtramos   los proyectos 
                // por q pasaremos el id del proyceto como obejto filtrado por el id
                proyecto: state.proyectos.filter( proyecto => proyecto._id === action.payload) 
            }
        case ELIMINAR_PROYECTO: 
            return { 
                ...state, 
                // traemo los que no sean igual al que le di click, dado que lo 
                // ponemos cuando esta diferetnte, y lo traemos de la lista de proyecto  
                proyectos: state.proyectos.filter( proyecto => proyecto._id !== action.payload), 
                // resetamso el proyecto activo para que no se muestre nada 
                proyecto: null

            }
        case PROYECTO_ERROR: 
            return { 
                ...state, 
                mensaje: action.payload
            }
        default: 
            return state;
    }
}