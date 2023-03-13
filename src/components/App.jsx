import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import navBar
import { NavBar } from './navBar/navBar';
// import itemListContainer
import { ItemListContainer } from './itemListContainer/ItemListContainer';
// import itemDetailContainer
import { ItemDetailContainer } from './itemDetailContainer/ItemDetailContainer';
// import checkout
import { Checkout } from './checkout/Checkout';
// import cart
import { Cart } from './cart/Cart';
// import footer
import { Footer } from './footer/Footer';
// import context dark mode
import { DarkModeProvider } from '../context/DarkModeContext';
// import context carrito
import { CarritoProvider } from '../context/CarritoContext';
// import toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import css
import './App.css';

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
        <Footer/>
        <ToastContainer/>
        </CarritoProvider>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
