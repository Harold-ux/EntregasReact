import { useState } from "react";
import Contador from "./Contador";

const EjemploContador = () => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador+1);
    // console.log(aumentar);
  };

  return (
    <Contador contador={contador} aumentar={aumentar} />
  );
};

export default EjemploContador;

