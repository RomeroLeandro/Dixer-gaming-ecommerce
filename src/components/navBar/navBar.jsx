import React from "react";
import "./NavBar.css";
import logo from "./img/logo.png";

import { Secciones } from "./secciones/Secciones";
import { CartWidget } from "../cartWidget/CartWidget";
import { BotonDarkMode } from "./botonDarkMode/BotonDarkMode";
import { useDarkModeContext } from "../../context/DarkModeContext";
export const NavBar = () => {
  const {darkMode} = useDarkModeContext()
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-primary" : "bg-light"}`}>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img className='logo' src={logo} alt='logo dixer gaming' />
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <Secciones />
          <CartWidget />
        </div>
        <BotonDarkMode />
      </div>
    </nav>
  );
};
