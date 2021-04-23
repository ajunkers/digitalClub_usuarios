import { useEffect } from "react";
import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';

const DatosNoticia = () => {
  const { id } = useParams();
  const { datos: datosNoticia, pedirDatos: pedirNoticia } = useFetch();
  const url = `https://digitalclub.herokuapp.com/noticias/noticia/${id}`;

  useEffect(() => {
    pedirNoticia(url);
  }, [url, pedirNoticia]);

  return (
    datosNoticia ?
      <>
        <h1 className="noticias">{datosNoticia.titulo}</h1>
        <img src={datosNoticia.img ? datosNoticia.img.link : ""} alt={datosNoticia.img ? datosNoticia.img.alt : ""} className="imagen" />
        <p className="texto">{datosNoticia.texto ? datosNoticia.texto : ""}</p>
      </>
      : <></>
  )
}
export default DatosNoticia;