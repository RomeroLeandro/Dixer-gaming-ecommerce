import React from 'react'

import {Categorias} from '../categorias/Categorias';
export const Secciones = React.memo(() => {
  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
    <Categorias/>
    <li className='nav-item'>
      <button>
        <a className='nav-link' href='#'>Ayuda</a>
      </button>
      </li>
    </ul>
  );
});