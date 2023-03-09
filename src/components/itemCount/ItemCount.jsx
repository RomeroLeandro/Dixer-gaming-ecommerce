import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './itemCount.css'
export const ItemCount = ({ valInicial, stock ,onAdd}) => {
  const [contador, setContador] = useState(valInicial)
  const sumar = () => contador < stock && setContador(contador + 1)
  const restar = () => contador > valInicial && setContador(contador - 1)


  return (
    <div className='countContainer'>
      <div className="count">
      <button className='subtractCount' onClick={() => restar()}>-</button>
      {contador}
      <button className='addCount' onClick={() => sumar()}>+</button>
      </div>
      <button className='counter' onClick={()=>onAdd(contador)}>Agregar al carrito</button>
      <Link to={'/cart'}>
      <button className='counter' onClick={()=>onAdd(contador)}>Comprar ahora</button></Link>
    </div>
  )
}
