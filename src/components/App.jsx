import React from "react";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
// importacion de componentes
import { NavBar } from "./navBar/navBar";
import { ItemListContainer } from "./itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./itemDetailContainer/ItemDetailContainer";
import { Checkout } from "./checkout/Checkout";
import { Cart } from "./cart/Cart";
import { ToastContainer } from 'react-toastify';
import { DarkModeProvider } from "../context/DarkModeContext";
import { CarritoProvider } from "../context/CarritoContext";
import { Footer } from "./footer/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <DarkModeProvider>
      <CarritoProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria/' element={<ItemListContainer/>}/>
          <Route path='/subcategory/:idSubCategoria/' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        {/* <Footer/> */}
        <ToastContainer/>
        </CarritoProvider>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
