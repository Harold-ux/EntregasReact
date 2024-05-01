import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const saludar = () => {
    alert("Hello to my little friend");
  };

  return (
    <div className="show">
      <h1>Hola Mundo!</h1>
      <button onClick={saludar}>Saludar</button>
      <ItemListContainer />
    </div>
  );
}

export default App;

