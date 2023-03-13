import React from 'react'
// import item
import { Item } from '../item/Item'
// import itemList
import { ItemCart } from '../itemCart/ItemCart';

export const ItemList = ({prods, plantilla}) => {
  return (
    <>
      {plantilla === "Item"
      ?
      prods.map(producto => <Item item={producto} key={producto.id}/>)
      :
      prods.map(producto => <ItemCart item={producto} key={producto.id}/>)
      }    
    </>)};
