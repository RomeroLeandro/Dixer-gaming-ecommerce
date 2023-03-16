import React from 'react';
import { Link } from 'react-router-dom';
// import context dark mode
import { useDarkModeContext } from '../../../context/DarkModeContext';
// import css
import './Categorias.css';

export const Categorias = React.memo(() => {
const {darkMode} = useDarkModeContext()
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
    {id:'7', subCategoria:'Teclados'},
    {id:'8', subCategoria:'Webcams'}]

  return (
    <li className='nav-item dropdown'>
      <a className={`nav-link dropdown-toggle categoryContainer ${darkMode && 'nav-link dropdown-toggle categoryContainerDark'}`} href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'> Categorias </a>
      <ul className={`dropdown-menu dropMenu ${darkMode && 'dropdown-menu dropMenuDark'}`}>
        {categorias.map((el) => {
          return (
            <li key={el.id}>
              <Link className={`dropdown-item category ${darkMode && 'dropdown-item categoryDark'}`} to={`/category/${el.nombre}`}>{el.nombre}</Link>
            </li>)})}
        <li className={`nav-link dropdown-submenu subMenu ${darkMode && 'nav-link dropdown-submenu subMenuDark'}`}>
          <Link className={`nav-link category perifericos ${darkMode && 'nav-link categoryDark perifericos'}`} tabIndex={-1} to={`/category/Perifericos`}>Perifericos</Link>
            <ul className={`dropdown-menu dropMenu ${darkMode && 'dropdown-menu dropMenuDark'}`}>
              {subCategorias.map((sub) => {
                return(
                  <li key={sub.id}>
                    <Link className='dropdown-item subCategory' to={`/subcategory/${sub.subCategoria}`}>{sub.subCategoria}</Link>
                  </li>)})}
            </ul>
        </li>
      </ul>
    </li>)})