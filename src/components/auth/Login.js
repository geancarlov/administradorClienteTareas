import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    // state para iniciar ssecion 
    const [usuario, guardarUsario] = useState({ 
        email: '', 
        password: ''
    });

    // extraer del usario 
    const { email, password } = usuario; 


    const onChange = (e) => { 
        // hacemos el codigo de con vlaue y los id guardamos en el state 
        guardarUsario({
            ...usuario, 
            [e.target.name] : e.target.value
        })
    } 

    // cuando el usario quiere inicuar cesion
    const onSubmit = (e) => { 
         e.preventDefualt(); 
        //  validar que no esten los campos vacion 

        // pasarlo al accion 

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                
                <h1>Iniciar Sesion</h1>

                <form onSubmit={onSubmit}>
                   
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion" />
                    </div>

                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>

            </div>
        </div>
     );
}
 
export default Login;