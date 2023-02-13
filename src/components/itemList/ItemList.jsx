import React from 'react'
import { Item } from '../item/Item'

export const ItemList = ({prods}) => {
  return (
    <>
      {prods.map(producto => <Item item={producto} key={producto.id}/>)}
    </>
  )
};
