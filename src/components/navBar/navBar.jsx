import React from 'react'
import './NavBar.css'
import img from '../img/logo.png'


import {Secciones} from './secciones/Secciones';
import { CartWidget } from '../cartWidget/CartWidget';
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={img} alt="logo dixer gaming"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Secciones/>
      </div>
      <CartWidget CantidadCarro={10}/>
    </nav>
  );
}








