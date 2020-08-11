// cliente_mern > src > components > proyectos > ListadoTareas.js 
 
import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {
    
    // obtenemos los state
    const proyectosContext = useContext(proyectoContext); 
    const { proyecto, eliminarProyecto } = proyectosContext; 

    const tareasContext = useContext(TareaContext); 
    const { tareasproyecto } = tareasContext;
    
    
    if (!proyecto) return <h2>Selecciona una Meta</h2>;
    
    const [proyectoActual] = proyecto; 
    
    
    const onClickEliminar = () => {
        // le pasamos a _ de id 
         eliminarProyecto(proyectoActual._id); 
    }
    
    return ( 
        <Fragment>
            
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>) 
                    :
                    tareasproyecto.map(tarea => (
                        
                            <Tarea 
                                key={tarea._id}
                                tarea={tarea}
                            />
                        
                    ))
                }
            </ul>

            <button 
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times; </button>

        </Fragment>

     );
}
 
export default ListadoTareas;