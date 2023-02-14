import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export const Item = ({ item }) => {
  return (
    <Link className='nav-link card mb-3 cardProducto' to={`/item/${item.id}`}> 
      <div style={{ width: "18rem" }}>
        <img src={`/img/${item.img}`} className='card-img-top' alt={`imagen de ${item.nombre}`}/>
        <div className='card-body cardBody'>
          <h5 className='card-title'> {item.nombre} {item.marca} {item.modelo} </h5>
          <p className='card-text'> Marca: {item.marca}</p>
          <p className='card-text'>${item.precio}</p>
          <button className='btn btn-dark'>🛒 Agregar</button>
        </div>
      </div>
    </Link>
  );
};
