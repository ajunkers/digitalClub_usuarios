import { Switch, Route, BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";

import Principal from "./paginas/Principal";
import Noticia from "./paginas/Noticia";
import Equipo from "./paginas/Equipo";
import Navegacion from "./components/Navegacion";
import Footer from "./components/Footer";
import NoticiasContext from "./context/NoticiasContext";
import EquiposContext from "./context/EquiposContext";
import NoEncontrada from "./paginas/NoEncntrada";
import datosNoticias from "./noticias.json";
import datosEquipos from "./equipos.json";


function App() {


  return (
    <Router>
      <EquiposContext.Provider value={{ datosEquipos }}>
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
                {/* <Equipo /> */}
              </Route>
              <Route path="/" exact>
                <Redirect to="/principal" />
              </Route>
              <Route path="/NotFound">
                <NoEncontrada />
              </Route>
              <Route path="/*">
                <Redirect to="/NotFound" />
              </Route>

            </Switch>
          </NoticiasContext.Provider>
        </main>
        <Footer />
      </EquiposContext.Provider>
    </Router>
  );
}

export default App;
