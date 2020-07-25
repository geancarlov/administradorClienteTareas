import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';


const FormTareas = () => {
    
    // extraemos si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext); 
    const { proyecto } = proyectosContext; 

    // si no hayt poryecto no mostarmos el componente
    if(!proyecto) return null; 

    // extrameo el primero de la lista 
    const [proyectoActual] = proyecto;


    return ( 
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>

            </form>
        </div>
     );
}
 
export default FormTareas;