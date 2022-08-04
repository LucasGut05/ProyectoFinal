import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { data } from "../mock/DataUno";

export const ItemListContainer = () => {
  const [listaAlimentos, setListaAlimentos] = useState([]);
  const [mensaje, setMensaje] = useState(false);
  const [loading, setLoading] = useState(true);

  //********************UseEffect************************* */

  useEffect(() => {
    data.then((respuesta) => setListaAlimentos(respuesta));
    data.catch(() => setMensaje("ERROR"));
    data.finally(() => setLoading(false));
  }, []);

  //*********************************************** */

  return (
    <div>
      {mensaje && <p>{mensaje}</p>}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList listaAlimentos={listaAlimentos} />
      )}
    </div>
  );
};
