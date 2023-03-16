import React from 'react'
import { Link} from 'react-router-dom'
// import itemList
import { ItemList } from '../itemList/ItemList'
// import context carrito
import { useCarritoContext } from '../../context/CarritoContext'
// import context dark mode
import { useDarkModeContext } from '../../context/DarkModeContext';
// import css
import './Cart.css'

export const Cart = () => {
  // dark mode
  const {darkMode} = useDarkModeContext()
  
  // context carrito
  const { carrito, emptyCart, totalPrice } = useCarritoContext()
  
  return (
    <div className={'cartContent'}>
      {carrito.length === 0
      ?
      <div className={`emptyCart ${darkMode && 'emptyCartDark'}`}>
        <h2>¡UPS! El carrito esta vacio.</h2>
        <Link to={"/"}><button className={`continueBuy ${darkMode && 'continueBuyDark'}`}>Continuar comprando</button></Link>
      </div>
      :
      <div>
        <div className='contentCart'>
          <ItemList prods={carrito} plantilla='ItemCart'/>
          <div className={`divButtons ${darkMode && 'divButtonsDark'}`}>
            <div className='divClearCart'>
              <button className={`clearCart ${darkMode && 'clearCartDark'}`} onClick={() => emptyCart()}>Eliminar todo</button>
            </div>
            <Link className='divContinueBuy' to={"/"}><button className={`continueBuy ${darkMode && 'continueBuyDark'}`}>Continuar comprando</button></Link>
            <h5 className={`textTotal ${darkMode && 'textTotalDark'}`}>TOTAL : ${new Intl.NumberFormat('de-DE').format(totalPrice())}</h5>
            <Link className='divEndBuy' to={'/checkout'}><button className={`endBuy ${darkMode && 'endBuyDark'}`}>Finalizar Compra</button></Link>
          </div>
        </div>
      </div>}
    </div>)}