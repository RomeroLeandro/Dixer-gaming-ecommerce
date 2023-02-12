import React from "react";

// importacion de componentes
import { NavBar } from "./navBar/navBar";
import { ItemListContainer } from "./itemListContainer/ItemListContainer";
import { ItemCount } from "./itemCount/ItemCount";
import { Item } from "./item/Item";
const App = () => {
  return (
    <>
      <NavBar />
      <ItemCount valInicial={1} stock={10} />
      <Item
        item={{
          id: "1",
          idCategoria: "1",
          nombre: "Teclado",
          marca: "Red Dragon",
          modelo: "Fizz Pro K616",
          precio: "18.000",
          stock: "20",
          img: "redDragonFizzProK616-1.webp",
        }}
      />
    </>
  );
};

export default App;
