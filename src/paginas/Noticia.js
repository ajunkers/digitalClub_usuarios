import '../estilos/noticias.css';
import { useContext } from "react";
import NoticiasContext from "../context/NoticiasContext";
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const Noticia = () => {
  let history = useHistory();
  const { id } = useParams();
  const { datosNoticias } = useContext(NoticiasContext);

  const getNoticia = datosNoticias.find(noticia =>
    noticia["_id"]["$oid"] === id);

  if (getNoticia !== null) {
    return (
      <div className="contenido">
        <article>
          <h1 className="noticias">{getNoticia.titulo}</h1>
          <img src={getNoticia.img.link} alt={getNoticia.img.alt} className="imagen" />
          <p className="texto">{getNoticia.texto}</p>
        </article>
      </div>
    );
  }
}
export default Noticia;
