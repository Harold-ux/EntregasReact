import obtenerData from "../../../public/data/data";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import '../ItemListContainer/ItemList.css'

const ItemListContainer = ({ saludar }) => {
  const [productos, setProductos] = useState([]);
  // Ejecutar la promesa y manejar la respuesta
  useEffect(() => {
    obtenerData()
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error); // Mensaje de error más descriptivo
      })
      .finally(() => {
        console.log("Finalizó promesa"); // Siempre se ejecuta después de then/catch
      });
    console.log(productos);
  }, []);

  return (
    <div>
      <p>{saludar}</p>
    <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer;





/////////////////////////////////////





/* 2da versión con el mismo código, agregándole objetos como una base de datos */

// import { useEffect } from "react";

// const nombres = ["Harold", "José", "Díaz", "Delgado"];

// const ItemListContainer = ({ saludar }) => {
//   const condición = true;

//   const promesa = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (condición) {
//           resolve(nombres.join(' '));
//         } else {
//           reject("se rechazó");
//         }
//       }, 2000); // Retraso de 2 segundos
//     });
//   };

//   // Ejecutar la promesa y manejar la respuesta
//   useEffect(() => {
//     promesa()
//       .then((respuesta) => {
//         console.log(respuesta); // "se resolvió" si condición es verdadera
//       })
//       .catch((error) => {
//         console.error(error); // Muestra el error si condición es falsa
//       })
//       .finally(() => {
//         console.log("Finalizó promesa"); // Siempre se ejecuta después de then/catch
//       });
//   }, []);

//   return (
//     <div>
//       <p>{saludar}</p> {/* Muestra la prop 'saludar' */}
//     </div>
//   );
// };

// export default ItemListContainer;



/////////////////////////////////////////





/* Por acá vemos el ejemplo inicial */

// import { useEffect } from "react";

// const ItemListContainer = ({ saludar }) => {
//     const condición = true;

//     const promesa = () => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           if (condición) {
//             resolve("se resolvió");
//           } else {
//             reject("se rechazó");
//           }
//         }, 2000); // Retraso de 2 segundos
//       });
//     };

//     // Ejecutar la promesa y manejar la respuesta
//     useEffect(()=> {
//       promesa()
//       .then((respuesta) => {
//         console.log(respuesta); // "se resolvió" si condición es verdadera
//       })
//       .catch((error) => {
//         console.error(error); // Muestra el error si condición es falsa
//       })
//       .finally(() => {
//         console.log("Finalizó promesa"); // Siempre se ejecuta después de then/catch
//       });
//      }, []);

//     return (
//       <div>
//         <p>{saludar}</p> {/* Muestra la prop 'saludar' */}
//       </div>
//     );
//   };

//   export default ItemListContainer;
