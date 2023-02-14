import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { consultarBBD } from '../../utils/funciones';
import { ItemDetail } from '../itemDetail/ItemDetail';
export const ItemDetailContainer = () => {
    const {id} = useParams()
    const[producto, setProducto] = useState([])

    useEffect(() =>{
      consultarBBD('../json/Productos.json').then(prods =>{
        const prod = prods.find(item => item.id === id)
        setProducto(prod)
      })
    },[])
  return (
    <div className='card mb-3 container itemDetail'>
      <ItemDetail prod={producto}/>
    </div>
  )
}
