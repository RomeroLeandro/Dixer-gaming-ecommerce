import React from 'react'
import { useState } from 'react'
export const ItemCount = ({ valInicial, stock ,onAdd}) => {
  const [contador, setContador] = useState(valInicial)
  const sumar = () => contador < stock && setContador(contador + 1)
  const restar = () => contador > valInicial && setContador(contador - 1)


  return (
    <div>
      <button className='subtractCount' onClick={() => restar()}>-</button>
      {contador}
      <button className='addCount' onClick={() => sumar()}>+</button>
      <button className='counter' onClick={()=>onAdd(contador)}>Agregar al carrito</button>
    </div>
  )
}
