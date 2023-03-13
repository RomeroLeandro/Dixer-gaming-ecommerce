import React from 'react'
// import itemCount
import { ItemCount } from '../itemCount/ItemCount'
// import context dark mode
import { useDarkModeContext } from '../../context/DarkModeContext'
// import context carrito
import { useCarritoContext } from '../../context/CarritoContext'
import './ItemDetail.css'
export const ItemDetail = ({prod}) => {
  const {darkMode} = useDarkModeContext()
  const { addItem } = useCarritoContext()

  const onAdd = (cantidad) => {
    addItem(prod, cantidad)
  }
  return (
    <div className='itemDetailContainer container'>
      <div id='carouselExampleFade' className='carousel slide carousel-fade imgContainer'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={prod.img} className='d-block w-400' alt={`imagen de ${prod.nombre}`} />
          </div>
          <div className='carousel-item'>
            <img src={prod.img2} className='d-block w-400' alt={`imagen de ${prod.nombre}`} />
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleFade' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon iconCarousel' aria-hidden='true' />
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleFade' data-bs-slide='next'>
          <span className='carousel-control-next-icon iconCarousel' aria-hidden='true'/>
        </button>
      </div>
      <div className='textContainer'>
        <h5 className='textTittleDetail'>{prod.marca} {prod.modelo}</h5>
        <p className='textBrand'>Marca: {prod.marca}</p>
        <div className='priceStock'>
          <p className='priceDetail'>${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
          <p className='stockDetail'>({prod.stock} disponibles)</p>
        </div>
        <p className='descriptionDetail'>{prod.descripcion}</p>
        <ItemCount color='itemCount' valInicial={1} stock={prod.stock} onAdd={onAdd} textButton='itemCount'/>
      </div>
    </div>)}
