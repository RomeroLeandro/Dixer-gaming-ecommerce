import React from 'react';

// importacion de componentes
import {NavBar} from './navBar/NavBar';
import {ItemListContainer} from './itemListContainer/ItemListContainer';
const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={10}/>
    </>
  );
}

export default App;



