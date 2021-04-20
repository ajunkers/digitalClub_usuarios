import '../estilos/noticias.css';
import { useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import NoticiasContext from '../context/NoticiasContext';


const Principal = () => {
  // const { datos: noticias, pedirDatos: pedirNoticias } = useFetch();
  const noticias = useContext(NoticiasContext);
  let history = useHistory();

  /*   useEffect(() => {
      pedirNoticias("https://digitalclub.herokuapp.com/noticias");
    }, [pedirNoticias]); */

  const clickNoticia = e => {
    const path = `/noticia/${e.target.id}`;
    history.push(path);
  };
  /* "https://digitalclub.herokuapp.com/noticias" */

  return (
    <div className="contenido">
      <h1 className="noticias">Noticias</h1>
      {noticias.datosNoticias.datos.map(noticia => (
        <article key={noticia["_id"]["$oid"]}>
          <h2>{noticia.titulo}</h2>
          {/* <img className="imagen" src={noticia.img.link} alt={noticia.img.Alt} /> */}

          <p>{noticia.texto}</p>
          <span className="mas" id={noticia["_id"]} onClick={clickNoticia}>Leer más...</span>
        </article>
      ))
      }
    </div >
  );



}

export default Principal;
