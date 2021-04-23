import { useContext } from "react";
import EquiposContext from "../context/EquiposContext";


const Navegacion = () => {
  const { equipos } = useContext(EquiposContext);
  return (
    <nav className="navegacion">
      <a href="/"><img src="../logo.png" className="logo" alt="logo Club" /></a>

      <span className="enlaces">

        <span className="navPrincipal"><a href="/" className="link">Noticias</a></span>
        <span className="navPrincipal submenu"><span className="link">Equipos</span>
          <span className="submenuContent"  >
            {equipos ?
              equipos.datos.map(equipo =>

                <a key={equipo["_id"]} href={`/equipo/${equipo["_id"]}`} className="submenuEquipo">{equipo.nombre}</a>

              ) : ""
            }
          </span>
        </span>
      </span>
    </nav>
  );
};
export default Navegacion;
