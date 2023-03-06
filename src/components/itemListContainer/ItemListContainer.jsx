import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../../utils/firebase';
import { ItemList } from '../itemList/ItemList';
import '../App.css'

export const ItemListContainer = () => {
  const {idCategoria} = useParams()
  const {idSubCategoria} = useParams()
  const [productos, setProductos] = useState([])

  const categorias = [
    {id:1, categoria: "Celulares"},
    {id:2, categoria: "Notebooks"},
    {id:3, categoria: "Sillas"},
    {id:4,categoria: "Perifericos"}
  ]
  const subCat = [
    {id:1, subCategoria:"Auriculares"},
    {id:2, subCategoria:"Microfonos"},
    {id:3, subCategoria:"Monitores"},
    {id:4, subCategoria:"Mouses"},
    {id:5, subCategoria:"MousesPad"},
    {id:6, subCategoria:"Parlantes"},
    {id:7, subCategoria:"Teclados"},
    {id:8, subCategoria:"Webcams"}
    
  ]
  useEffect(() => {
    if(idCategoria){
      getProductos().then(products => {
        const categoriaId = categorias.find((data)=>data.categoria === idCategoria)?.id
        const prods = products.filter(prod =>prod.stock >0).filter(prod => prod.idCategoria ===categoriaId)
        const items = <ItemList prods={prods} plantilla="Item"/>
        setProductos(items)
      })
    }
    else if(idSubCategoria){
      getProductos().then(subProducts => {
        const categoriaSubId = subCat.find((data)=>data.subCategoria === idSubCategoria)?.id
        const subProds = subProducts.filter(prod =>prod.stock >0).filter(subProd => subProd.idSubCategoria === categoriaSubId)
        const items = <ItemList prods={subProds} plantilla="Item"/>
        setProductos(items)
      })
    }
    else{
      getProductos().then(products => {
        const prods = products.filter(prod =>prod.stock >0)
        const items = <ItemList prods={prods} plantilla="Item"/>
        setProductos(items)
      })
    }
  }, [idCategoria,idSubCategoria]);

  return(
    <div className='row cardProducts'>
      {productos}
    </div>
  )
  }
