import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import { withRouter, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormBecarios from './FormBecarios';
import RegistroExitoso from './RegistroExitoso';
import displayBecarios from './displayForm';
const Routes = () => (
  <main>
          <Switch>
          <Route path="/" exact  component={FormBecarios}/>
          <Route path="/confirmacion"  component={RegistroExitoso}/>
          <Route path="/maestrosresultados" exact component={displayBecarios}/>
           {/*<PrivateRoute path="/admin/citas" component={CitasAdmin} authed={isLoggedIn()}/>
            <PrivateRoute path="/admin/cotizaciones" component={CotizacionAdmin} authed={isLoggedIn()}/>
          <Route path="/Success" component={Sucess}/><PrivateRoute path="/admin/cotizaciones" component={CotizacionAdmin} authed={isLoggedIn()}/>
         */}
        </Switch>
  </main>
);

export default Routes;