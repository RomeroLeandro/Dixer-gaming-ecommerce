import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { consultarBBD } from '../../utils/funciones';
import { ItemList } from '../itemList/ItemList';
import '../App.css'

export const ItemListContainer = () => {
  const {idCategoria} = useParams()
  const [productos, setProductos] = useState([])
  useEffect(() => {
    if(idCategoria){
      consultarBBD('../json/Productos.json').then(products => {
        const prods = products.filter(prod => prod.categoria === idCategoria)
        const items = ItemList({prods})
        setProductos(items)
      })
    }
    else{
      consultarBBD('./json/Productos.json').then(prods => {
        const items = ItemList({prods})
        setProductos(items)
      })
    }
  }, [idCategoria]);

  return(
    <div className='row cardProductos'>
      {productos}
    </div>
  )
  }
