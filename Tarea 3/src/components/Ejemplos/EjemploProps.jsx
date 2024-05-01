import React from "react";

const EjemploProps = (props) => {
  const { mensaje, image } = props;

  console.log(mensaje);
  return (
    <div>
      <h2>{mensaje}</h2>
      <img src={image} style={{with:"150px", height:"150px"}} alt="" />
    </div>
  );
};

export default EjemploProps;
