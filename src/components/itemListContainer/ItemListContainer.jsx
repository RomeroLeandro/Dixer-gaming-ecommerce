import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { consultarBBD } from '../../utils/funciones';
import { ItemList } from '../itemList/ItemList';
import '../App.css'

export const ItemListContainer = () => {
  const {idCategoria} = useParams()
  const [productos, setProductos] = useState([])

  const categorias=[
    {id:"1", categoria: "Celulares"},
    {id:"2", categoria: "Notebooks"},
    {id:"3", categoria: "Sillas"},
    {id:"4",categoria: "Perifericos"}
  ]
  useEffect(() => {
    if(idCategoria){
      consultarBBD('../json/Productos.json').then(products => {
        const categoriaId = categorias.find((data)=>data.categoria === idCategoria)?.id
        const prods = products.filter(prod => prod.idCategoria === categoriaId)
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
