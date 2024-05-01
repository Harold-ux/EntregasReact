import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="data-show">
      {productos.length > 0 ? (
        productos.map((producto) => 
        <Item producto={producto} />)
      ) : (
        <p className="cargando">Cargando productos ...</p> // Mostrar mensaje mientras se cargan
      )}
    </div>
  );
};

export default ItemList;
