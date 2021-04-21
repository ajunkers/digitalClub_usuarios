import '../estilos/noticias.css';
import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import NoticiasContext from '../context/NoticiasContext';


const Principal = () => {
  const { noticias } = useContext(NoticiasContext);
  let history = useHistory();

  const clickNoticia = e => {
    const path = `/noticia/${e.target.id}`;
    history.push(path);
  };
  /* "https://digitalclub.herokuapp.com/noticias" */

  return (
    <div className="contenido">
      <h1 className="noticias">Noticias</h1>

      {noticias ? noticias.datos.map(noticia =>
        <article key={noticia["_id"]}>
          <h2>{noticia.titulo}</h2>
          {noticia.img ? <img className="imagen" src={noticia.img.link} alt={noticia.img.Alt} /> : <></>}
          {noticia.texto ? <p>{noticia.texto}</p> : <></>}
          <span className="mas" id={noticia["_id"]} onClick={clickNoticia}>Leer más...</span>
        </article>
      ) : "cargando"}
    </div >
  );



}

export default Principal;
