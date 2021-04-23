import '../estilos/noticias.css';
import DatosNoticia from '../components/DatosNoticias';
import { useHistory } from 'react-router';

const Noticia = () => {
  let history = useHistory();
  const volver = e => {
    history.push("/");
  };

  return (
    <div className="contenido">
      <span className="volver" onClick={volver}>Volver </span>
      <article>
        <DatosNoticia />
      </article>
    </div>
  );

}
export default Noticia;
