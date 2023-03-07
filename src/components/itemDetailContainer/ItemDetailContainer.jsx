import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../utils/firebase';
import { ItemDetail } from '../itemDetail/ItemDetail';
export const ItemDetailContainer = () => {
    const {id} = useParams()
    const[producto, setProducto] = useState([])

    useEffect(() =>{
      getProducto(id).then(prod =>{
        setProducto(prod)
      })
    },[])
  return (
    <div className='itemDetail'>
      <ItemDetail prod={producto}/>
    </div>
  )
}
