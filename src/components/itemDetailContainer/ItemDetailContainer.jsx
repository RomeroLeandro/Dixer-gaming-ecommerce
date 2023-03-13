import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import itemDetail
import { ItemDetail } from '../itemDetail/ItemDetail';
// import firebase
import { getProducto } from '../../utils/firebase';

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const[producto, setProducto] = useState([])

    useEffect(() =>{
      getProducto(id).then(prod =>{
        setProducto(prod)})
    },[])

  return (
    <div className='itemDetail'>
      <ItemDetail prod={producto}/>
    </div>
  )
}
