import React from 'react'
import { ItemCount } from '../itemCount/ItemCount'
export const ItemDetail = ({prod}) => {
  return (
    <div className="row g-0">
    <div className="col-md-4">
      <img src={`../img/${prod.img}`} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className='card-title'> {prod.nombre} {prod.marca} {prod.modelo}</h5>
        <p className='card-text'><small className="text-muted">Marca: {prod.marca}</small></p>
        <p className='card-text'>$ {prod.precio}</p>
        <p className='card-text'>Stock: {prod.stock}</p>
        <p className='card-text'>{prod.descripcion}</p>
        <ItemCount valInicial={1} stock={prod.stock}/>
        <button className='btn btn-primary'>COMPRAR</button>
      </div>
    </div>
  </div>
  )
}
