import React from 'react'
import { Link } from 'react-router-dom';

import {Categorias} from '../categorias/Categorias';
export const Secciones = React.memo(() => {
  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <li className='nav-item'>
        <Link className='nav-link' to={'/'}><p>Inicio</p></Link>
      </li>
    <Categorias/>
    <li className='nav-item'>
      <button>
        <a className='nav-link' href='#'>Ayuda</a>
      </button>
      </li>
    </ul>
  );
});