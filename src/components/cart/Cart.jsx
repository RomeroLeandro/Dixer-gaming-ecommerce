import React from 'react'
import { Link } from "react-router-dom"
import { ItemList } from "../itemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"
import './Cart.css'

export const Cart = () => {
  const { carrito, emptyCart, totalPrice } = useCarritoContext()
  return (
    <>
      {
        carrito.length === 0
        ?
        <div className='emptyCart'>
          <h2>¡UPS! El carrito esta vacio.</h2>
          <Link to={"/"}>
            <button className="continueBuy">Continuar comprando</button>
          </Link>
        </div>
        :
        <div>
          <div className="contentCart">
          <ItemList prods={carrito} plantilla="ItemCart"/>
          <div className="divButtons">
            <div className="divClearCart">
            <button className="clearCart" onClick={() => emptyCart()}>Eliminar todo</button>
            </div>
            <Link className="divContinueBuy" to={"/"}><button className="continueBuy">Continuar comprando</button></Link>
            <h5 className='textTotal'>TOTAL : $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</h5>
            <Link className="divEndBuy" to={"/checkout"}><button className="endBuy">Finalizar Compra</button></Link>

          </div>
        </div>
          </div>
      }
    </>
  )
}