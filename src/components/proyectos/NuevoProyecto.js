import React, { Fragment, useState, useContext } from 'react'; 
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => { 
    
    // obtener el state del formulario 
    const proyectosContext = useContext(proyectoContext);
    const { formulario } = proyectoContext;


    // state para Ptoyecto 
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })

    // lee los contenidos del input
    const onChangeProyecto = e => { 
        guardarProyecto({ 
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    // extre el estae para el value
    const {nombre} = proyecto;

    // cuando el usario envia un proyecto

    const onSubmitProyecto = (e) => { 
        e.preventDefault();
        // validar el proyecto 
        
        // agregar al state

        // reiniciar el form 
        

    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            {
                formulario ? 
                    ( 
                        <form
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProyecto}
                        >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Nombre Proyceto"
                                name="nombre"
                                value = {nombre}
                                onChange={onChangeProyecto}
                            />
            
                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"
                            />
            
                        </form>
                    ) : null 
            }
            
            
            
        </Fragment>
    );
}

export default NuevoProyecto; 