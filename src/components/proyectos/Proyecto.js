// cliente_mern > src > components > proycetos > Proyecto.js 

import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {
    
    const proyectosContext = useContext(proyectoContext)
    const { proyectoActual } = proyectosContext;

    const tareasContext = useContext(TareaContext); 
    const { obtenerTareas } = tareasContext;

    const seleccionarProyecto = id => { 
        proyectoActual(id) 
        obtenerTareas(id)  
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                // se poen con _id por mongo y com se guarda
                onClick={() => seleccionarProyecto(proyecto._id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;