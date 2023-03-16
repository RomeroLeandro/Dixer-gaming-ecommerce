import React from 'react'
// import categorias
import {Categorias} from '../categorias/Categorias';
// import context dark mode
import { useDarkModeContext } from '../../../context/DarkModeContext';
// import css
import './Secciones.css'

export const Secciones = React.memo(() => {
  const {darkMode} = useDarkModeContext()
  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <Categorias/>
      <li className='nav-item'>
        <button className={`buttonHelp ${darkMode && 'buttonHelpDark'}`}>
          <a className='nav-link' href='#'>Ayuda</a>
        </button>
      </li>
    </ul>);});