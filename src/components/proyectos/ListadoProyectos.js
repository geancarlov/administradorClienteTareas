// cliente_mern > src > components > proyectos > ListadoProyectos.js

//  
import React, {useContext, useEffect} from 'react'; 
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// para psara el mensaje de error
import AlertaContext from '../../context/alertas/alertaContext'

const ListadoProyectos = () => {
    
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

    // extramso el state de alerta 
    const alertaContext = useContext(AlertaContext); 
    const { alerta, mostrarAlerta } = alertaContext;

    useEffect(() => {
        // si hay un error,le pasmos al otro state
        if(mensaje){ 
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        
        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje])

    if (proyectos.length  === 0 ) return <p>No hay proyectos, comienza creando uno</p>;

    

    return ( 
        <ul className="listado-proyectos">
            {/* para motrar el mensaje */}
            { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}

            <TransitionGroup> 
            {proyectos.map(proyecto => (
                <CSSTransition
                    // en mongo el id se pone _id
                    key={proyecto._id}
                    timeout={200}
                    classNames="proyecto"
                >
                    <Proyecto 
                        proyecto={proyecto}
                    />  
                </CSSTransition> 
            ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;