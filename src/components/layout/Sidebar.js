import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListadoProyectos from '../proyectos/ListadoProyectos'


const Sidebar = () => { 
    return (
        <aside>
            <h1>METAS<span>Gestor</span></h1>

            <NuevoProyecto />

            <div className="proyectos">
                
                <h2>Tus Metas</h2>
                <ListadoProyectos />
                
            </div>

        </aside>
     );

}

export default Sidebar; 