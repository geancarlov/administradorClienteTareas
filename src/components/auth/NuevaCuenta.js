// components > auth > NuevaCuenta.js
import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';

const NuevaCuenta = () => {
    
    // extraemos los valores del context 
    const alertaContext = useContext(AlertaContext); 
    const { alerta, mostrarAlerta } = alertaContext;


    // state para iniciar secion 
    const [usuario, guardarUsario] = useState({ 
        nombre: '',
        email: '', 
        password: '', 
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario; 


    const onChange = (e) => { 
        guardarUsario({
            ...usuario, 
            [e.target.name] : e.target.value
        })
    } 

    const onSubmit = (e) => { 
         e.preventDefault(); 
       
         // bvalidar que no haya campos vacios 
        if( nombre.trim() === "" ||
            email.trim() === "" ||
            password.trim() === "" ||
            confirmar.trim() === "" ) { 
                mostrarAlerta('TOdos lo campos son obligatorios', 'alerta-error');
                return
        }

        // password min de 6 caracteres
        if(password.length < 6 ) { 
            mostrarAlerta('El password debe de ser de al menos 6 caracteres', 'alerta-error'); 
            // para no ejecutar la siguiente linea
            return 
        }
        
        // los password sean iguales 
        if(password !== confirmar) { 
            mostrarAlerta('Los passwords no son iguales', 'alerta-error'); 
            return
        }
        

        // pasar a action 

    }

    return ( 
        <div className="form-usuario">
            {/* aqui, se pone le state de alerta  */}
            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> ) : 
                null }

            <div className="contenedor-form sombra-dark">
                
                <h1>Obtener Cuenta</h1>

                <form onSubmit={onSubmit}>
                   
                    <div className="campo-form">

                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange= {onChange}
                        />
                    </div>
                    
                    <div className="campo-form">

                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange= {onChange}
                        />
                    </div>

                    <div className="campo-form">

                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange= {onChange}
                        />
                    </div>

                    <div className="campo-form">

                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            value={confirmar}
                            onChange= {onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block" 
                            value="Registrarme" 
                        />
                    </div>

                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Volver a Iniciar Sesion
                </Link>

            </div>
        </div>
     );
}
 
export default NuevaCuenta;
