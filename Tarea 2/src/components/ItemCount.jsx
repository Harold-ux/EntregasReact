import React, { useState } from "react";
import "../App.css"; // Ruta correcta para importar CSS

const ItemCount = ({ stock, children }) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("Cantidad máxima permitida!!");
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Stock agotado!!");
    }
  };

  return (
    <>
      <div>{children}</div>
      <button onClick={sumar}>Sumar</button> {/* Incrementar el contador */}
      <h2>{count}</h2> {/* Mostrar el valor del contador */}
      <button onClick={restar}>Restar</button> {/* Decrementar el contador */}
    </>
  );
};

export default ItemCount;
