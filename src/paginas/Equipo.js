import { useEffect } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import '../estilos/equipos.css';
import EquipoContext from "../context/EquipoContext";
import ListaStaff from "../components/ListaStaff";
import ListaJugadores from "../components/ListaJugadores";

const Equipo = () => {
  const { id } = useParams();
  const { datos: equipo, pedirDatos: pedirEquipo } = useFetch();
  const url = `https://digitalclub.herokuapp.com/equipos/equipo/${id}`;

  useEffect(() => {
    pedirEquipo(url);
  }, [url, pedirEquipo]);


  return (
    <>
      < EquipoContext.Provider value={{ equipo }}>
        {equipo ?
          <article>
            <h1 className="equipo">{equipo.nombre}</h1>
            <section className="columnas colStaff">
              <div className="columna">
                <img className="imgEquipo" src={equipo.img ? equipo.img.link : "../placeholder.png"} alt={equipo.img ? equipo.img.alt : "imagen vacia"} />
                <ListaStaff />
              </div>
              <div className="columna colJugadores">
                <ListaJugadores />
              </div>
            </section>
          </article>
          : ""}
      </EquipoContext.Provider>
    </>
  );
}
export default Equipo;
