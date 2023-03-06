import React from 'react'
import { useCarritoContext } from "../../context/CarritoContext"
import './ItemCart.css'

export const ItemCart = ({item}) => {
  const { removeItem } = useCarritoContext()
  return (
    <div className="itemCart">
      <div className="imgCart">
          <img src={item.img} alt={`Imagen de ${item.nombre}`} className="img-fluid rounded-start"/>
      </div>
      <div className="nameCart">
        <h5>{item.nombre} {item.modelo}</h5>
        {/* <p> Precio Unitario: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p> */}
      </div>
      <div className="cantCart">
        <p> Cantidad: {item.cant}</p>
      </div> 
      <div className="priceItemCart">
        <p>${new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
      </div>
      <div className="delete">
      <button className='deleteButton' onClick={() => removeItem(item.id)}>Eliminar</button>
      </div>
    </div>
  )
}