// cliente_mern > src > components > proyectos > ListadoTareas.js 
 
import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
// agregamos para la transicion 
import { CSSTransition, TransitionGroup} from 'react-transition-group'

const ListadoTareas = () => {
    
    const proyectosContext = useContext(proyectoContext); 
    const { proyecto, eliminarProyecto } = proyectosContext; 
    
    // obtenerm el sate de tareas 
    const tareasContext = useContext(TareaContext); 
    const { tareasproyecto } = tareasContext;

    if(!proyecto) return <h2>Selecciona un proyecto</h2>;
    
    const [proyectoActual] = proyecto; 
    

    const onClickEliminar = () => {
        // le pasamos a _ de id 
         eliminarProyecto(proyectoActual._id); 
    }


    return ( 
        <Fragment>
            
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {/* le metemos la trancioncion de esta manera con 
                una clase pensalisad */}
                {tareasproyecto.length === 0 
                    ? (<li length="tarea"><p>No hay tareas</p></li>)
                    : <TransitionGroup>
                        {tareasproyecto.map(tarea =>(
                            <CSSTransition
                                key={tarea.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea 
                                    tarea ={tarea}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup> 

                    
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