import React, { useState } from "react"; // No es necesario importar 'children'
import "../App.css"; // Asegúrate de que la ruta es correcta

const ItemCount = ({ stock, children }) => { // 'children' debe ser parte de las props
  const [count, setCount] = useState(0);

  const sumar = () => {
    if (count < stock) { // Uso del parámetro 'stock'
      setCount(count + 1);
    } else {
      alert("Cantidad máxima permitida!!");
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1); // Evitar valores negativos
    } else {
      alert("Stock agotado!!");
    }
  };

  return (
    <div className="Container">
      {children} {/* Renderizar contenido adicional */}
      <button onClick={sumar}>Sumar</button> {/* Botón para incrementar */}
      <h2>{count}</h2> {/* Mostrar el valor del contador */}
      <button onClick={restar}>Restar</button> {/* Botón para decrementar */}
    </div>
  );
};

export default ItemCount;
