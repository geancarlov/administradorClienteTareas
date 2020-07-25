import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({proyecto}) => {
    
    // obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext)
    const { proyectoActual } = proyectosContext;

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                // seleccionamos id del proyecto cuando da click 
                onClick={() => proyectoActual(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;