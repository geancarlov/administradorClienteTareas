// FormTarea.js
import React, {useContext, useState, useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';


const FormTareas = () => {
    
    const proyectosContext = useContext(proyectoContext); 
    const { proyecto } = proyectosContext; 


    const tareasContext = useContext(TareaContext); 
    const { tareaseleccionada , 
            errortarea, 
            agregarTarea,
            validarTarea, 
            obtenerTareas, 
            actualziarTarea, 
            limpiarTarea } = tareasContext;

    useEffect(()=>{
        if ( tareaseleccionada !== null ) { 
            guardarTarea(tareaseleccionada)
        }else { 
            guardarTarea({ 
                nombre: ''
            })
        }
    },[tareaseleccionada])


    const [tarea, guardarTarea] = useState({ 
        nombre: ''

    })

    const { nombre } = tarea;

    if(!proyecto) return null; 

    const [proyectoActual] = proyecto;

    
    const handleChange = e => {
        guardarTarea({ 
            ...tarea, 
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault(); 

        if(nombre.trim() === ''){ 
            validarTarea(); 
            return; 
        } 

        if(tareaseleccionada === null ){ 
            tarea.proyectoId = proyectoActual.id;    
            tarea.estado = false; 
            agregarTarea(tarea);
        } else { 
 
            actualziarTarea(tarea);

 
            limpiarTarea();
        }

 
        obtenerTareas(proyectoActual.id);

 
        guardarTarea({ 
            nombre: ''
        })

        
    }



    return ( 
        <div className="formulario">
            <form onSubmit={onSubmit} >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        // vemo si tenemo suna terea selccionada 
                        value={tareaseleccionada ? 'Editar Tarea' : "Agregar Tarea" }
                        
                    />
                </div>
                {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null }
            </form>
        </div>
     );
}
 
export default FormTareas;