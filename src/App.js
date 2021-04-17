import { Switch, Route, BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import { useContext } from "react";
import Principal from "./paginas/Principal";
import Noticia from "./paginas/Noticia";
import Equipo from "./paginas/Equipo";
import Navegacion from "./components/Navegacion";
import Footer from "./components/Footer";

/*  import useApi from "./hooks/useApi";*/

import NoticiasContext from "./context/NoticiasContext";

import datosNoticias from "./noticias.json";


function App() {

  return (
    <Router>
      <Navegacion />
      <main>
        <NoticiasContext.Provider value={{ datosNoticias }}>
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
        </NoticiasContext.Provider>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
