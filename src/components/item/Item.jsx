import React from 'react';
import { Link } from 'react-router-dom';
// import context dark mode
import { useDarkModeContext } from '../../context/DarkModeContext';
// import css
import './Item.css'

export const Item = ({ item }) => {
  const {darkMode} = useDarkModeContext();
  console.log(darkMode)

  return (
    <Link className={`cardProduct ${darkMode && 'cardProductDark'}`} to={`/item/${item.id}`}> 
      <div  className='cardContent'>
        <div className='lineContainer'>
          <img src={item.img} className='itemImg' alt={`imagen de ${item.nombre}`}/>
          <div className={`line ${darkMode && 'lineDark'}`}></div>
          <div className='cardBody'>
            <p className={`cardPrice ${darkMode && 'cardPriceDark'}`}>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
            <p className={`cardBrand ${darkMode && 'cardBrandDark'}`}> Marca: {item.marca}</p>
            <h5 className={`cardTittle ${darkMode && 'cardTittleDark'}`}> {item.nombre} {item.marca} {item.modelo} </h5>
          </div>
        </div>
      </div>
    </Link>)};
