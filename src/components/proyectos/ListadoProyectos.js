import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
// imporatmos el context 
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {
    
    // extrameos los datos
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // llamamos al dispatch de obtener proyectos
    useEffect(() => {
        obtenerProyectos();
    }, [])

    // por si la primera vez no hay proyetos no se renderiza nada
    if (proyectos.length  === 0 ) return <p>No hay proyectos, comienza creando uno</p>;

    

    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto 
                    key = {proyecto.id}
                    proyecto={proyecto}
                />   
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;