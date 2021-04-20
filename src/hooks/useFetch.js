
import { useCallback, useState } from "react";

const useFetch = () => {
  const [datos, setDatos] = useState(null);
  const pedirDatos = useCallback(url => {
    fetch(url)
      .then(resp => resp.json())
      .then(datosAPI => setDatos(datosAPI)).catch(err => {
        console.error('fetch failed', err);
      });
  }, []);
  return { datos, pedirDatos };
};

export default useFetch;
