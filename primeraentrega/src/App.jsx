import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element= {<ItemListContainer />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer greeting = "BIENVENIDOS 😊" />} />
          <Route path="/detalle/:id" elemento={<ItemDetailContainer />} />
          <Route path= "*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
    
      
  )
}


export default App;
