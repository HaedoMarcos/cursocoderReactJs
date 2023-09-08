import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting="Hola MUNDO CALZADO" />
    </>
  );
}

export default App;
