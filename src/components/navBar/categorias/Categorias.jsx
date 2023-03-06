import React from "react";
import { Link } from "react-router-dom";
import "./Categorias.css";

export const Categorias = React.memo(() => {
  let categorias = [
    {nombre: "Celulares", id: "1"},
    {nombre: "Notebooks", id: "2"},
    {nombre: "Sillas", id: "3"},
  ]
  let subCategorias = [
    {id:"1", subCategoria:"Auriculares"},
    {id:"2", subCategoria:"Microfonos"},
    {id:"3", subCategoria:"Monitores"},
    {id:"4", subCategoria:"Mouses"},
    {id:"5", subCategoria:"MousesPad"},
    {id:"6", subCategoria:"Parlantes"},
    {id:"7", subCategoria:"Teclados"},
    {id:"8", subCategoria:"Webcams"}
  ]

  return (
    <li className='nav-item dropdown'>
      <a className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'> Categorias </a>
      <ul className='dropdown-menu'>
        {categorias.map((el) => {
          return (
            <li key={el.id}>
              <Link className='dropdown-item' to={`/category/${el.nombre}`}>{el.nombre}</Link>
            </li>
          )
        })}
        <li className='nav-link dropdown-submenu'>
          <Link className='nav-link' tabIndex={-1} to={`/category/Perifericos`}>Perifericos</Link>
          <ul className="dropdown-menu">
            {subCategorias.map((sub) => {
              return(
                <li key={sub.id}>
                  <Link className='dropdown-item' to={`/subcategory/${sub.subCategoria}`}>{sub.subCategoria}</Link>
                </li>
              )
            })}
          </ul>
        </li>
      </ul>
    </li>
  )
})