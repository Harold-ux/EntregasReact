/* 3ra versión con el mismo código, limpiar la promesa ya que siempre querremos que la promesa se resuelva, ademas es sin sentido.

Ademas agregaremos un nuevo archivo .js llamado data donde estará un array de nuestros productos para el ejemplo simulando una base de datos y la lectura de data con una promesa
*/


const productos = [
    {
        id: "Acxse2244",
        nombre: "Solid Gold Petite Micropave",
        descripción: "Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        precio: 168,
        stock: 5, 
        categoría: "Joyería",
        imagen: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        id: "Aojse2584",
        nombre: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        descripción: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        precio: 10.99,
        stock: 5, 
        categoría: "Sobreviviente",
        imagen: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
    }

]

const obtenerData = () => {
          return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 1500);
          });
        };


        export default obtenerData;
        
        
        //Aca eliminamos el condicional if que tenía ya que siempre querremos que se cumpla la promesa, eliminé reject ya que tenemos el catch error en el ItemListContainer 