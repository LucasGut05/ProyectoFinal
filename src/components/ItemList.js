import React from "react";
import { Item } from "./Item";

export const ItemList = ({ listaAlimentos }) => {
  return (
    <div className="itemlist">
      {listaAlimentos.map((alimento) => (
        <Item alimento={alimento} key={alimento.id} />
      ))}
    </div>
  );
};
