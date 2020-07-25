import React, {Fragment, useContext} from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoTareas = () => {
    
    // extraemos del state principal
    const proyectosContext = useContext(proyectoContext); 
    const { proyecto, eliminarProyecto } = proyectosContext; 
    
    // si no hay un poryecto seleccionado, regresamos el h2
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;
    
    // se si se selccionado con Array Destructuring extrameos el prouecto
    const [proyectoActual] = proyecto; 

    

    const tareasProyecto = [ 
        {nombre: 'Elegir Plataforma', estado: true}, 
        {nombre: 'Elegir Colores', estado: false}, 
        {nombre: 'Elegir Plataformas de pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true}, 
    ]; 
    

    const onClickEliminar = () => {
         eliminarProyecto(proyectoActual.id); 
    }


    return ( 
        <Fragment>
            
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0 
                    ? (<li length="tarea"><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea =>(
                        <Tarea 
                            tarea ={tarea}
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