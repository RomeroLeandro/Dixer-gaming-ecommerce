import React from 'react';

// importacion de componentes
import { NavBar } from './navBar/navBar';
import { ItemListContainer } from './itemListContainer/ItemListContainer';
import { ItemCount } from './itemCount/ItemCount';
const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemCount valInicial={1} stock={10} />
    </>
  );
}

export default App;



