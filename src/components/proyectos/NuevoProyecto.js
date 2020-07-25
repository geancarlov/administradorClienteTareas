import React, { Fragment, useState, useContext } from 'react'; 
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => { 
    
    const proyectosContext = useContext(proyectoContext);
    const { formulario, 
            errorformulario ,
            mostrarFormulario, 
            agregarProyecto, 
            mostratError } = proyectosContext;


    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })

    const onChangeProyecto = e => { 
        guardarProyecto({ 
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    const {nombre} = proyecto;


    const onSubmitProyecto = (e) => { 
        e.preventDefault();
        // validamso el proyceto, mmostar error
        if(nombre === ''){ 
            mostratError();
            return;
        }
        // pasamo el sate local el objetoa state gloval de proyceto
        agregarProyecto(proyecto)
        
        // reinicamo el formulario, por el value del input
        guardarProyecto({ 
            nombre: ''
        })

    }

    const onClickFormulario = () => { 
        mostrarFormulario(); 
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick = {onClickFormulario}
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
                    ) : null }
            {errorformulario ? 
                <p className="mensaje error">El nombre del pryecto es obligatorio</p> 
                : null
            }
            
            
        </Fragment>
    );
}

export default NuevoProyecto; 