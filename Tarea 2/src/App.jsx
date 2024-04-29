import "./App.css"; // Asegúrate de importar correctamente el archivo CSS
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div>
      {" "}
      {/* Aplicar la clase CSS */}
      <ItemCount stock={10}>
        <div className="itemContainer">
          <p>Contador con botones</p> {/* Contenido adicional */}
          <span>Actividad N° 2</span>
        </div>
      </ItemCount>
    </div>
  );
}

export default App;
