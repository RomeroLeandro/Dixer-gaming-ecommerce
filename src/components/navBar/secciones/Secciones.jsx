import React from 'react'

import {Categorias} from '../categorias/Categorias';
export const Secciones = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
      </li>
    <Categorias/>
    <li className="nav-item">
        <a className="nav-link" href="#">Ayuda</a>
      </li>
    </ul>
  );
}