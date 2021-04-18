import '../estilos/noticias.css';
import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import NoticiasContext from "../context/NoticiasContext";

const Principal = () => {
  let history = useHistory();
  const { datosNoticias } = useContext(NoticiasContext);
  const clickNoticia = e => {
    const path = `/noticia/${e.target.id}`;
    history.push(path);
  };

  return (
    <div className="contenido">
      <h1 className="noticias">Noticias</h1>
      {datosNoticias.map(noticia => (
        <article key={noticia["_id"]["$oid"]}>
          <h2>{noticia.titulo}</h2>
          {/* <img className="imagen" src={noticia.img.link} alt={noticia.img.Alt} /> */}
          <p>{noticia.texto}</p>
          <span className="mas" id={noticia["_id"]["$oid"]} onClick={clickNoticia}>Leer más...</span>
        </article>
      ))
      }

    </div >
  );
}

export default Principal;
