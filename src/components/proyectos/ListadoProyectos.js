import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
    
    // creamos el sate con datos como prueba
    const proyectos = [ 
        {nombre: 'Tienda Virtual'}, 
        {nombre: 'Intranet'}, 
        {nombre: 'Diseño de Sitio Web'}
    ]
    
    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto 
                    proyecto={proyecto}
                />   
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;