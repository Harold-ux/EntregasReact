import React from "react";

const Item = ({ producto }) => {
  return (
    <div className="item-key" key={producto.id}>
      <h3 className="item-nombre">{producto.nombre}</h3>
      <p className="item-descripción">{producto.descripción}</p>
      <p className="item-precio">Precio: {producto.precio}</p>
      <p className="item-stock">Stock: {producto.stock}</p>
      <img
        className="item-imagen"
        src={producto.imagen}
        alt={producto.nombre}
      />
    </div>
  );
};

export default Item;
