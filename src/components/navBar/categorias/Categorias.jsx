import React from 'react'

export const Categorias = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Categorias
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Pcs y notebooks</a></li>
        <li><a className="dropdown-item" href="#">Componentes PC</a></li>
        <li><a className="dropdown-item" href="#">Perifericos</a></li>
      </ul>
    </li>
  );
}