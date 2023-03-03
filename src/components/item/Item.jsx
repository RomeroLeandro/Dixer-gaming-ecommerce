import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';
import '../App.css'

export const Item = ({ item }) => {
  const {darkMode} = useDarkModeContext();
  console.log(darkMode)
  
  return (
    <Link className={` cardProduct ${darkMode ? 'border-primary': 'border-light'}`} to={`/item/${item.id}`}> 
      <div  className='cards shadow' style={{ width: "18rem" }}>
        <img src={item.img} className='card-img-top' alt={`imagen de ${item.nombre}`}/>
        <div className={`card-body ${darkMode ? 'cardBodyDark':'cardBody'}`}>
          <h5 className='card-title'> {item.nombre} {item.marca} {item.modelo} </h5>
          <p className='card-text'> Marca: {item.marca}</p>
          <p className='card-text'>${item.precio}</p>
          <button className='addButton'>🛒 Agregar</button>
        </div>
      </div>
    </Link>
  );
};
