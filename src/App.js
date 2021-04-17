import { Switch, Route, BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import Principal from "./paginas/Principal";
import Noticia from "./paginas/Noticia";
import Equipo from "./paginas/Equipo";
import Navegacion from "./components/Navegacion";
import Footer from "./components/Footer";

import datosNoticias from "./noticias.json";


function App() {
  return (
    <Router>
      <Navegacion />
      <main>
        <Switch>
          <Route path="/principal" exact>
            <Principal />
          </Route>
          <Route path="/noticia/:id">
            <Noticia />
          </Route>
          <Route path="/equipo/:id">
            <Equipo />
          </Route>
          <Route path="/" exact>
            <Redirect to="/principal" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
