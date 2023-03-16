import React from 'react';
import { Link } from'react-router-dom';
// import secciones
import { Secciones } from './secciones/Secciones';
// import cartWidget
import { CartWidget } from '../cartWidget/CartWidget';
// import boton dark mode
import { BotonDarkMode } from './botonDarkMode/BotonDarkMode';
// import context dark mode
import { useDarkModeContext } from '../../context/DarkModeContext';
// import css
import './NavBar.css';

export const NavBar = () => {
  const {darkMode} = useDarkModeContext()

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode && 'navbarDark navbar-expand-lg'}`}>
      <div className={`container-fluid nav ${darkMode && 'container-fluid navDark'}`}>
        <Link to={'/'}>
          <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/dixer-gaming.appspot.com/o/favicon.ico?alt=media&token=29e42ab5-278a-4b3e-9ed4-4fd262acf519' alt='logo dixer gaming' />
        </Link>
        <button className={`navbar-toggler buttonToggler ${darkMode && 'navbar-toggler buttonTogglerDark'}`} type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <Secciones />
          <BotonDarkMode />
          <CartWidget />
        </div>
      </div>
    </nav>)}
