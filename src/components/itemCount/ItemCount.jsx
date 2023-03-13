import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import css
import './itemCount.css'
export const ItemCount = ({ valInicial, stock ,onAdd, color, textButton}) => {
  const [contador, setContador] = useState(valInicial)
  const sumar = () => contador < stock && setContador(contador + 1)
  const restar = () => contador > valInicial && setContador(contador - 1)

  return (
    <div className={color==="itemCount"?'countContainer':'cartContainer'}>
      <div className={color==="itemCount"?"count":'cart'}>
        <button className={color==="itemCount"?'subtractCount':'subtractCart'} onClick={() => restar()}>-</button>
        {contador}
        <button className={color==="itemCount"?'addCount':'addCart'} onClick={() => sumar()}>+</button>
      </div>
      <button className={color==="itemCount"?'counter':'cartAdd'} onClick={()=>onAdd(contador)}>{textButton=== "itemCount"?"Agregar al carrito":"Actualizar"}</button>
      <Link className='containerBuyNow' to={'/cart'}>
      <button className={color==="itemCount"?"counterBuy":"counterCart"} onClick={()=>onAdd(contador)}>Comprar ahora</button></Link>
    </div>)}
