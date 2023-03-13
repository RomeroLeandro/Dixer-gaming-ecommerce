import React from 'react'
import { Link } from 'react-router-dom';
// import context carrito
import { useCarritoContext } from '../../context/CarritoContext';
// import css
import './CartWidget.css'

export const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext()

  return (
    <Link className="nav-link" to={"/cart"}>
      <button className='cartIcon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgba(99,97,217,255)" className="bi bi-cart-fill" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        {getItemQuantity() > 0 && <span className='cartQuantities'>{getItemQuantity()}</span>}
      </button>
    </Link>);}


