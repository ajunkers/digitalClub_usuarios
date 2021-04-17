import '../estilos/noticias.css';
import { useContext } from "react";
import NoticiasContext from "../context/NoticiasContext";

const Principal = () => {
  const { datosNoticias } = useContext(NoticiasContext);
  return (
    <div className="contenido">
      <h1 className="noticias">Noticias</h1>
      {datosNoticias.map(noticia => (
        <article id={noticia["_id"]["$oid"]}>
          <h2>{noticia.titulo}</h2>
          {/* <img className="imagen" src={noticia.img.link} alt={noticia.img.Alt} /> */}
          <p>{noticia.texto}</p>
          <button className="mas">Leer más...</button>
        </article>
      ))}

    </div>
  );
}

export default Principal;
