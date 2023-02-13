// @ts-nocheck
import React from 'react';
import { useEffect, useState } from 'react';
import { consultarBBD } from '../../utils/funciones';
import { ItemList } from '../itemList/ItemList';
import '../App.css'

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  useEffect(() => {
    consultarBBD('./json/Productos.json').then(prods => {
      const items = ItemList({prods})
      setProductos(items)
    })
  }, []);

  return(
    <div className='row cardProductos'>
      {productos}
    </div>
  )
  }
