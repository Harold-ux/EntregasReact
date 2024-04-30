import React, { useState } from "react";
import "../App.css"; // Ruta correcta para importar CSS

const ItemCount = ({ stock, children }) => {
  const [count, setCount] = useState(0);
  const [carrito, setCarrito] = useState(0);

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

  const agregarAlCarrito = () => {
    setCarrito(carrito + count); // Suma el valor de 'count' al carrito
    console.log("Agregado al carrito:", count); // Muestra el valor agregado en la consola
  };

  return (
    <>
      <div>{children}</div>
      <button onClick={restar}>Restar</button> {/* Decrementar el contador */}
      <h2>{count}</h2> {/* Mostrar el valor del contador */}
      <button onClick={sumar}>Sumar</button> {/* Incrementar el contador */}
      <div className=" botonCarrito">
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
      </div>
      <div className="carrito">Carrito: {carrito}</div>
    </>
  );
};

export default ItemCount;
