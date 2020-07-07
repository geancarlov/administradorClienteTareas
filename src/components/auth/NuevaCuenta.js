import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const NuevaCuenta = () => {
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
         e.preventDefualt(); 
       
         // bvalidar que no haya campos vacios 


        // password min de 6 caracteres

        
        // los password sean iguales 
        

        // pasar a action 


    }

    return ( 
        <div className="form-usuario">
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
