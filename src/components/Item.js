import React, { useState } from "react";
import { ItemCount } from "./ItemCount";

export const Item = ({ alimento }) => {
  const [mensaje, setMensaje] = useState(false);

  const onAdd = (cantidad) => {
    setMensaje(`Agregaste ${cantidad} productos`);
  };

  return (
    <div className="card" style={{ width: "20rem", margin: ".5rem" }}>
      <img src={alimento.img} className="card-img-top" alt={alimento.name} />
      <div className="card-body">
        <h5 className="card-title">{alimento.name}</h5>
        <p className="card-text">Calorias x gramo: {alimento.calorias}</p>
        <ItemCount calorias={alimento.calorias} onAdd={onAdd}/>
      </div>
    </div>
  );
};
