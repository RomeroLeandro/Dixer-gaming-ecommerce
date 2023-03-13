import React from 'react';
import { Link } from 'react-router-dom';
// import css
import './Categorias.css';

export const Categorias = React.memo(() => {
  let categorias = [
    {nombre: 'Celulares', id: '1'},
    {nombre: 'Notebooks', id: '2'},
    {nombre: 'Sillas', id:'3'}]

  let subCategorias = [
    {id:'1', subCategoria:'Auriculares'},
    {id:'2', subCategoria:'Microfonos'},
    {id:'3', subCategoria:'Monitores'},
    {id:'4', subCategoria:'Mouses'},
    {id:'5', subCategoria:'MousesPad'},
    {id:'6', subCategoria:'Parlantes'},
    {id:'7', subCategoria:'Teclado'},
    {id:'8', subCategoria:'Webcams'}]

  return (
    <li className='nav-item dropdown'>
      <a className='nav-link dropdown-toggle categoryContainer' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'> Categorias </a>
      <ul className='dropdown-menu'>
        {categorias.map((el) => {
          return (
            <li key={el.id}>
              <Link className='dropdown-item category' to={`/category/${el.nombre}`}>{el.nombre}</Link>
            </li>)})}
        <li className='nav-link dropdown-submenu subMenu'>
          <Link className=' nav-link category perifericos' tabIndex={-1} to={`/category/Perifericos`}>Perifericos</Link>
            <ul className='dropdown-menu'>
              {subCategorias.map((sub) => {
                return(
                  <li key={sub.id}>
                    <Link className='dropdown-item subCategory' to={`/subcategory/${sub.subCategoria}`}>{sub.subCategoria}</Link>
                  </li>)})}
            </ul>
        </li>
      </ul>
    </li>)})