// Tarea.js
import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {
    
    // context de Tarea para proyecto actual 
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;

    // extraemos el proyecto 
    const [proyectoActual] = proyecto;
    
    // context de tarea 
    const tareasContext = useContext(TareaContext); 
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;
    
    
    
    // fn para elimanr la trea
    const tareaEliminar = id => { 
        eliminarTarea(id); 
        obtenerTareas(proyectoActual.id);
        // esto seria igual a
        //  obtenerTarea(proyecto[0].id)
    }

    // fn modifica el etado de trea 
    const  cambiarEstado = tarea => {
        if(tarea.estado) { 
            tarea.estado = false;
        } else { 
            tarea.estado = true;
        }
        // cuando la tarea ya esta modificada
        cambiarEstadoTarea(tarea)
    }

    // agragear una tarea actual cuando el usario 
    // desee editarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea)
    }
    

    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado 
                ?
                    (
                        <button
                            type="button"
                            className="completo"
                            // tienen que ser arrow fn por el parametro
                            onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    ) 
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>
            
            <div className="acciones">
            
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>
                
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={()=> tareaEliminar(tarea.id)}
                >Eliminar</button>
            
            </div>


        </li>
    );
}
 
export default Tarea;