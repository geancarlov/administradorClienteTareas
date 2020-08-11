// cliente_mern > app.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

// extrayendo los satte 
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autentificacion/authState'
import tokenAuth from './config/token';

// importamos nuestro higeer order componente 
import RutaPrivada from './components/rutas/RutaPrivada'

// revisamos si tenemos un token 
const token = localStorage.getItem('token'); 
if(token) {
  tokenAuth(token); 
}

function App() {

  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>  
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                {/* le ponemos el hider compoennte, por que tiene la condicion 
                que si tiene el diger componete puede ingresar */}
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
