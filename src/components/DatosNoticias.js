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

  const fecha = datosNoticia ? datosNoticia["updated_at"].split("T") : <></>;

  return (
    datosNoticia ?
      <>
        <h1 className="noticias">{datosNoticia.titulo}</h1>
        <img src={datosNoticia.img ? datosNoticia.img.link : ""} alt={datosNoticia.img ? datosNoticia.img.alt : ""} className="imagenNoticia" />
        <p className="texto">{datosNoticia.texto ? datosNoticia.texto : ""}</p>
        <span className="actualizado">Última actualización: {fecha[0]}</span>
      </>
      : <></>
  )
}
export default DatosNoticia;
