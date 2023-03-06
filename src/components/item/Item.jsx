import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';
import './Item.css'

export const Item = ({ item }) => {
  const {darkMode} = useDarkModeContext();
  console.log(darkMode)
  
  return (
    <Link className={` cardProduct ${darkMode ? 'border-primary': 'border-light'}`} to={`/item/${item.id}`}> 
      <div  className='cardContent'>
        <div className="lineContainer">
        <img src={item.img} className='itemImg' alt={`imagen de ${item.nombre}`}/>
        <div className="line"></div>
        </div>
        <div className={`cardBody ${darkMode ? 'cardBodyDark':'cardBody'}`}>
          <p className='cardPrice'>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
          <p className='cardBrand'> Marca: {item.marca}</p>
          <h5 className='cardTitle'> {item.nombre} {item.marca} {item.modelo} </h5>
        </div>
        <div className="addButtonContainer">

          <button className='addButton'>🛒 Agregar</button>
        </div>
      </div>
    </Link>
  );
};
