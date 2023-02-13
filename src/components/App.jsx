import React from "react";

// importacion de componentes
import { NavBar } from "./navBar/navBar";
import { ItemListContainer } from "./itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./itemDetailContainer/ItemDetailContainer";
import "./App.css";
const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
};

export default App;
