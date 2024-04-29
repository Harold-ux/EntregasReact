import "./App.css"; // Importar el CSS corregido
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="orden"> {/* Aplicar la clase para centrar el contenido */}
      <ItemCount stock={10}>
        <div className="itemContainer">
          <p>Contador con botones</p>
          <span>Actividad N° 2</span>
        </div>
      </ItemCount>
    </div>
  );
}

export default App;
