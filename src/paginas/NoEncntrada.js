import { useHistory } from "react-router";
import "../estilos/noEncontrado.css";

const NoEncontrada = () => {

  let history = useHistory();
  const volver = e => {
    history.push("/");
  };
  return (
    <div className="contenido notFound">
      <h1 className="noEncontrado">PÁGINA NO ENCONTRADA</h1>

      <span className="noEncontradoVolver" onClick={volver}>Volver</span>
    </div>
  );
};

export default NoEncontrada;
