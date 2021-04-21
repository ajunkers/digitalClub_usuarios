import { useContext } from "react";
import EquiposContext from "../context/EquiposContext";


const Navegacion = () => {
  const { equipos } = useContext(EquiposContext);
  return (
    <nav className="navegacion">
      <a href="/"><img src="../logo.png" className="logo" alt="logo Club" /></a>

      <span className="enlaces">

        <span className="principal"><a href="/" className="link">Noticias</a></span>
        <span className="principal submenu"><span className="link">Equipos</span>
          <span className="submenu-content"  >
            {equipos ?
              equipos.datos.map(equipo =>

                <a key={equipo["_id"]} href={`/equipo/${equipo["_id"]}`} className="equipo">{equipo.nombre}</a>

              ) : ""
            }
          </span>
        </span>
      </span>
    </nav>
  );
};
export default Navegacion;
