import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import '../estilos/equipos.css';
import EquipoContext from "../context/EquipoContext";
import ListaStaff from "../components/ListaStaff";
import ListaJugadores from "../components/ListaJugadores";

const Equipo = () => {
  const { id } = useParams();
  const { datos: equipo, pedirDatos: pedirEquipo } = useFetch();
  const url = `https://digitalclub.herokuapp.com/equipos/equipo/${id}`;

  let history = useHistory();
  const volver = e => {
    history.push("/");
  };

  useEffect(() => {
    pedirEquipo(url);
  }, [url, pedirEquipo]);

  return (
    <>
      < EquipoContext.Provider value={{ equipo }}>
        <div className="contenido">
          <span className="volver" onClick={volver}>Volver </span>
          {equipo ?
            <article>
              <h1 className="equipo">{equipo.nombre}</h1>
              <section className="columnas">
                <div className="columna colStaff">
                  <img className="imgEquipo" src={equipo.img ? equipo.img.link : "../placeholder.png"} alt={equipo.img ? equipo.img.alt : "imagen vacia"} />
                  <ListaStaff />
                </div>
                <div className="columna colJugadores">
                  <ListaJugadores />
                </div>
              </section>
            </article>
            : ""}
        </div>
      </EquipoContext.Provider>
    </>
  );
}
export default Equipo;
