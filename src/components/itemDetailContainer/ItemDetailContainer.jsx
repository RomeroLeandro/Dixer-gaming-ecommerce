import React from 'react'
import { useState,useEffect } from 'react';
import { consultarBBD } from '../../utils/funciones';
import { ItemDetail } from '../itemDetail/ItemDetail';
export const ItemDetailContainer = () => {
    const[producto, setProducto] = useState([])

    useEffect(() =>{
      consultarBBD('../json/Productos.json').then(prods =>{
        const prod = prods.find(item => item.id === '4')
        setProducto(prod)
      })
    },[])
  return (
    <div className='card mb-3 container itemDetail'>
      <ItemDetail prod={producto}/>
    </div>
  )
}
