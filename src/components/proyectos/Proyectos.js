// cliente_mern > src > components > proyectos > Proyecto.js 

import React, { useContext,  useEffect } from 'react'; 
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'
import FormTareas from '../tareas/FormTareas'
import ListadoTareas from '../tareas/ListadoTareas'
import AuthContext from '../../context/autentificacion/authContext';

const Proyectos = () => {

    // extraer la info de auntentificacion 
    const authToken = useContext(AuthContext)
    const { usuarioAutenticado } = authToken; 

    // lo ponemos en un efect cada q cambio o se actualize 
    // no manda la info del usario logeado, se manteria la sesion por reacar 
    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])

    return ( 
        <div className="contenedor-app">
            {/* for para agregar nuevos proyectos */}
            <Sidebar />
            
            <div className="seccion-principal">
                
                <Barra />

                <main>

                    <FormTareas />

                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                
                </main>

            </div>

        </div>
     );
}
 
export default Proyectos;