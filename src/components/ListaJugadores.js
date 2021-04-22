import { useContext } from "react";
import EquipoContext from "../context/EquipoContext";

const ListaJugadores = () => {
  const { equipo } = useContext(EquipoContext);

  return (
    <section className="jugadores">
      <h2>Jugadores</h2>
      <table>
        <thead className="encabezado">
          <tr>
            <th className="dorsal">Dorsal</th>
            <th className="rol">Rol</th>
            <th className="nombre">Nombre</th>
          </tr>
        </thead>
        <tbody className="datos">
          {
            equipo.jugadores.map(jugador =>
              <tr key={jugador["_id"]}>
                <td className="dorsal">{jugador.dorsal}</td>
                <td className="rol">{jugador.rol}</td>
                <td className="nombre">{jugador.nombre}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </section>)
}
export default ListaJugadores;
