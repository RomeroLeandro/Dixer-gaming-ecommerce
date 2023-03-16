import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import context dark mode
import { useDarkModeContext } from '../../context/DarkModeContext';
// import css
import './itemCount.css'
export const ItemCount = ({ valInicial, stock ,onAdd, textButton}) => {
  // dark mode
  const {darkMode} = useDarkModeContext()

  const [contador, setContador] = useState(valInicial)
  const sumar = () => contador < stock && setContador(contador + 1)
  const restar = () => contador > valInicial && setContador(contador - 1)

  return (
    <div className='countContainer'>
      <div className={`count ${darkMode && 'countDark'}`}>
        <button className='subtractCount' onClick={() => restar()}>-</button>
        {contador}
        <button className='addCount' onClick={() => sumar()}>+</button>
      </div>
      <button className={`counter ${darkMode && 'counterDark'}`} onClick={()=>onAdd(contador)}>{textButton=== 'itemCount'?'Agregar al carrito':'Actualizar'}</button>
      <Link className='containerBuyNow' to={'/cart'}>
      <button className={`counterBuy ${darkMode && 'counterBuyDark'}`} onClick={()=>onAdd(contador)}>Comprar ahora</button></Link>
    </div>)}
