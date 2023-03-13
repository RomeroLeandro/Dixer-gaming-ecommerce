import React from 'react'
// import categorias
import {Categorias} from '../categorias/Categorias';
// import css
import './Secciones.css'

export const Secciones = React.memo(() => {
  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <Categorias/>
      <li className='nav-item'>
        <button className='buttonHelp'>
          <a className='nav-link' href='#'>Ayuda</a>
        </button>
      </li>
    </ul>);});