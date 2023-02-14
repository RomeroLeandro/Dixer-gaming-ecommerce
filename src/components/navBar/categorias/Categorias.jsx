import React from "react";
import { isElement } from "react-dom/test-utils";
import { Link } from "react-router-dom";
import "./Categorias.css";

export const Categorias = () => {
  let categorias = [
    {nombre: "Celulares", id: "1"},
    {nombre: "Notebooks", id: "2"},
    {nombre: "Sillas", id: "3"},
    {nombre: "Perifericos", id: "4"}
  ]

  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Categorias </a>
      <ul className="dropdown-menu">{
      categorias.map((el) => {
        return (
          <li key={el.id}>
            <Link className="dropdown-item" to={`/category/${el.nombre}`}>{el.nombre}</Link>
          </li>)
        })
      }
      </ul>
    </li>
  );
};
