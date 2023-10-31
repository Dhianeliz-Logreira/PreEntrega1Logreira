import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <div>
    <NavBar />
    <ItemListContainer greeting = "BIENVENIDOS 😊" />
    </div>
    </>
  )
}

export default App;
