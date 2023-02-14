import React from "react";
import { Link } from "react-router-dom";
import "./Categorias.css";

export const Categorias = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Categorias </a>
      <ul className="dropdown-menu">
        <li> <Link className="dropdown-item" to={'/category/1'}> Celulares </Link> </li>
        <li> <Link className="dropdown-item" to={'/category/2'}> Notebooks </Link> </li>
        <li> <Link className="dropdown-item" to={'/category/3'}> Sillas </Link> </li>
        <li className="dropdown-submenu"> <Link className="dropdown-item" tabIndex={-1} to={'/category/4'}> Perifericos </Link>
          <ul className="dropdown-menu">
            <li> <a className="dropdown-item" tabIndex={-1} href="#"> Auriculares </a> </li>
            <li> <a className="dropdown-item" href="#"> Microfonos </a> </li>
            <li> <a className="dropdown-item" href="#"> Monitores </a> </li>
            <li> <a className="dropdown-item" href="#"> Mouses </a> </li>
            <li> <a className="dropdown-item" href="#"> Mouse-pads </a> </li>
            <li> <a className="dropdown-item" href="#"> Parlantes </a> </li>
            <li> <a className="dropdown-item" href="#"> Teclados </a> </li>
            <li> <a className="dropdown-item" href="#"> Webcams </a> </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};
