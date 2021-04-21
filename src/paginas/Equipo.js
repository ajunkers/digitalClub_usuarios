import { useEffect } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const Equipo = () => {
  const { id } = useParams();
  const { datos: equipo, pedirDatos: pedirEquipo } = useFetch();
  const url = `https://digitalclub.herokuapp.com/equipos/equipo/${id}`;

  useEffect(() => {
    pedirEquipo(url);
  }, [url, pedirEquipo]);


  return (<h1>Equipo</h1>);
}
export default Equipo;
