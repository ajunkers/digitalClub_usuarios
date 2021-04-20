import { useContext } from "react";
import EquiposContext from "../context/EquiposContext";


const Navegacion = () => {
  const equipos = useContext(EquiposContext);

  console.log(equipos);
  return (
    <nav className="navegacion">
      <a href="/"><img src="../logo.png" className="logo" alt="logo Club" /></a>

      <span className="enlaces">

        <span className="principal"><a href="/">Noticias</a></span>
        <span className="principal submenu"><a href="">Equipos</a>
          {
            equipos.datosEquipos.datos.map(equipo =>
              <span className="submenu-content" key={equipo["_id"]["$oid"]} ><a href={`/equipo/${equipo["_id"]["$oid"]}`} >{equipo.nombre}</a></span>
            )
          }
        </span>
      </span>
    </nav>
  );
};
export default Navegacion;
