import { useContext } from "react";
import EquiposContext from "../context/EquiposContext";


const Navegacion = () => {
  const { equipos } = useContext(EquiposContext);
  return (
    <nav className="navegacion">
      <a href="/" className="enlaceLogo">
        <img src="../logo.png" className="logo" alt="logo Club" />
        <span>Digital Club</span>
      </a>

      <span className="enlaces">

        <span className="navPrincipal"><a href="/" className="link">Noticias</a></span>
        <span className="navPrincipal submenu"><span className="link">Equipos</span>
          <div className="submenuContent">
            {equipos ?
              equipos.datos.map(equipo =>

                <a key={equipo["_id"]} href={`/equipo/${equipo["_id"]}`} className="submenuEquipo">{equipo.nombre}</a>

              ) : ""
            }
          </div>
        </span>
        <span className="navPrincipal"><a href="/contacta" className="link">Contáctanos</a></span>
      </span>
    </nav>
  );
};
export default Navegacion;
