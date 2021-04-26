import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import Principal from "./paginas/Principal";
import Noticia from "./paginas/Noticia";
import Equipo from "./paginas/Equipo";
import Navegacion from "./components/Navegacion";
import Footer from "./components/Footer";
import NoticiasContext from "./context/NoticiasContext";
import EquiposContext from "./context/EquiposContext";
import NoEncontrada from "./paginas/NoEncntrada";
import Contacta from "./paginas/Contacta";
import { useEffect } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const { datos: noticias, pedirDatos: pedirNoticias } = useFetch();
  useEffect(() => {
    pedirNoticias("https://digitalclub.herokuapp.com/noticias");
  }, [pedirNoticias]);

  const { datos: equipos, pedirDatos: pedirEquipos } = useFetch();
  useEffect(() => {
    pedirEquipos("https://digitalclub.herokuapp.com/equipos");
  }, [pedirEquipos]);


  return (
    <Router>
      <EquiposContext.Provider value={{ equipos }}>
        <Navegacion />
        <main>
          <NoticiasContext.Provider value={{ noticias }}>
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
              <Route path="/noticias" >
                <Redirect to="/principal" />
              </Route>
              <Route path="/contacta" >
                <Contacta />
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
