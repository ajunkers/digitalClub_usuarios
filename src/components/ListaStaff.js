import { useContext } from "react";
import EquipoContext from "../context/EquipoContext";

const ListaStaff = () => {
  const { equipo } = useContext(EquipoContext);

  return (
    <section className="staff">
      <h2>Staff</h2>
      <table>
        <thead className="encabezado">
          <tr>
            <th className="rol">Rol</th>
            <th className="nombre">Nombre</th>
          </tr>
        </thead>
        <tbody className="datos">
          {
            equipo.staff.map(staff =>
              <tr key={staff["_id"]}>
                <td className="rol">{staff.rol}</td>
                <td className="nombre">{staff.nombre}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </section>
  );

}
export default ListaStaff;
