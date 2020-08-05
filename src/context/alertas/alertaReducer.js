// context > alertas > alertaReducer.js
import {MOSTRAR_ALERTA, OCULTAR_ALERTA  } from '../../types'

export default (state, action ) => { 
    // no tiene copia de state por que solo son alertas
    switch(action.type) { 
        case MOSTRAR_ALERTA: 
            return { 
                alerta: action.payload
            }
        case OCULTAR_ALERTA: 
            return {
                alerta: null
            }
        default: 
            return state; 
    }
}