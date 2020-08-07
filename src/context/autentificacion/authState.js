// cliente_mern > src > context > auntentificacion > authState 

import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer'; 
import  clienteAxios from '../../config/axios';
// importamos el token 
import tokenAuth from '../../config/token';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

const AuthState = props => { 

    const initialState = { 
         token: localStorage.getItem('token'),
         autenticado: null, 
         usuario: null, 
         mensaje: null,
        // agregamos un state mas para flash de atuntentificaion 
         cargando: true
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const registrarUsuario = async datos => { 
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos); 
            dispatch({ 
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })
                
            usuarioAutenticado();  

        } catch (error) {

            const alerta = { 
                msg: error.response.data.msg, 
                categoria: 'alerta-error'
            }
            dispatch({ 
                type: REGISTRO_ERROR, 
                payload: alerta
            })
        }
    }

    const usuarioAutenticado = async () => { 
        const token = localStorage.getItem('token'); 
        if(token) { 
            tokenAuth(token)
        }
        
        try { 
            const respuesta = await clienteAxios.get('/api/auth'); 

            dispatch({ 
                type: OBTENER_USUARIO, 
                payload: respuesta.data.usuario
            });
        } catch (error) {
            console.log(error.response); 
            dispatch({ 
                 type: LOGIN_ERROR
             })
        }
    }

    const iniciarSesion = async (datos) => { 
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos)
            dispatch({ 
                type: LOGIN_EXITOSO, 
                payload: respuesta.data
            });

            usuarioAutenticado();

        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = { 
                msg: error.response.data.msg, 
                categoria: 'alerta-error'
            }
            dispatch({ 
                type: LOGIN_ERROR, 
                payload: alerta
            })
        }
    }

    // funcion para cerrar la sesion del usuario 
    const cerrarSesion = () => { 
        dispatch({ 
            type: CERRAR_SESION
        })
    }


    return(
        <AuthContext.Provider
            value={{
                token: state.token, 
                autenticado: state.autenticado,
                usuario: state.usuario, 
                mensaje: state.mensaje, 
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion, 
                usuarioAutenticado, 
                cerrarSesion
            }}
        > {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;