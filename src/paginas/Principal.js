import '../estilos/noticias.css';
import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import NoticiasContext from '../context/NoticiasContext';


const Principal = () => {
  const { noticias } = useContext(NoticiasContext);
  let history = useHistory();

  const clickNoticia = e => {
    const path = `/noticia/${e.target.dataset.noticia}`;
    history.push(path);
  };
  /* "https://digitalclub.herokuapp.com/noticias" */

  return (
    <div className="contenido">
      <h1 className="noticias">Noticias</h1>

      {noticias ? noticias.datos.map(noticia => {
        const fecha = noticia["updated_at"].split("T");

        return (<article key={noticia["_id"]}>
          <h2 className="tituloNoticia" data-noticia={noticia["_id"]} onClick={clickNoticia} >{noticia.titulo}</h2>
          {noticia.img ? <img data-noticia={noticia["_id"]} onClick={clickNoticia} className="imagen" src={noticia.img.link} alt={noticia.img.Alt} /> : <></>}
          {noticia.texto ? <p className="textoNoticia">{noticia.texto}</p> : <></>}
          <div className="prueba">
            <span className="actualizado">Última actualización: {fecha[0]}</span>
            <span className="mas" data-noticia={noticia["_id"]} id={noticia["_id"]} onClick={clickNoticia}>Leer más...</span>
          </div>
        </article>)
      }
      ) : "cargando"}
    </div >
  );



}

export default Principal;
