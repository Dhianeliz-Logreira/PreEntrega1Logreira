import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <>
    <div>
    <NavBar />
    <ItemListContainer greeting = "BIENVENIDOS 😊" />
    <ItemDetailContainer />
    <ItemCount stock = {10} /* onAdd = {} */ />
    </div>
    </>
  )
}


export default App;
