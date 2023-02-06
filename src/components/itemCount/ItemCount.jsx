import React from 'react'
import { useState } from 'react'
export const ItemCount = ({ valInicial, stock }) => {
    const [contador, setContador] = useState(valInicial)
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > valInicial && setContador(contador - 1)

    return (
        <div>
            <button className='btn btn-primary' onClick={() => restar()}>-</button>
            {contador}
            <button className='btn btn-primary' onClick={() => sumar()}>+</button>
            <button className='btn btn-secondary'>Agregar al carrito</button>
        </div>
    )
}
