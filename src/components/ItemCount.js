import React, { useState } from "react";

const useCounter = (calorias) => {
  const [counter, setCounter] = useState(0);

  let sumar = () => {
    if (counter >= calorias) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  };
  const restar = () => {
    if (counter <= 1) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  return {
    counter,
    sumar,
    restar,
  };
};

export function ItemCount(props) {
  let calorias = props.calorias;
  let onAdd = props.onAdd;

  const { counter, sumar, restar } = useCounter(parseInt(calorias));
  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between">
        <div clas>{counter}</div>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button onClick={restar} type="button" class="btn btn-danger">
            -
          </button>

          <button onClick={sumar} type="button" class="btn btn-success">
            +
          </button>

          <button
            onClick={() => onAdd(counter)}
            type="button"
            class="btn btn-warning"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
