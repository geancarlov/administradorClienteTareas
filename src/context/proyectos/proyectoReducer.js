import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types'

// se regresa un reducer para hacer el cambio del state, segun el type
export default (state, action) => { 
    switch(action.type) { 
        case FORMULARIO_PROYECTO : 
            return { 
                // dejamos todo el sate como y solo cambiamos el formaulrio 
                ...state, 
                formulario: true
            }
        case OBTENER_PROYECTOS: 
            return { 
                // siempre pasamo la copia del state
                ...state, 
                // en esta parte es doende le pamos el arrya de los proyecto  
                proyectos: action.payload
            }
        default: 
            return state;
    }
}