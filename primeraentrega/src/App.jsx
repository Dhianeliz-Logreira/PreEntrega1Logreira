import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
import { CartProvider } from "./contexto/CartContext";
import Checkout from "./components/Checkout/Checkout";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer greeting="BIENVENIDOS 😊" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
        </CartProvider>
    </BrowserRouter>
  );
}


export default App;
