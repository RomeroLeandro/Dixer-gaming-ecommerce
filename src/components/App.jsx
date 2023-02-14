import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importacion de componentes
import { NavBar } from "./navBar/navBar";
import { ItemListContainer } from "./itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./itemDetailContainer/ItemDetailContainer";
import "./App.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria/' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
