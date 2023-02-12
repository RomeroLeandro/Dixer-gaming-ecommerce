import React from "react";
import "./Categorias.css";

export const Categorias = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categorias
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Notebooks
          </a>
        </li>
        <li className=" dropdown-submenu">
          <a className="dropdown-item" tabIndex={-1} href="#">
            Componentes
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" tabIndex={-1} href="#">
                Almacenamiento
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Coolers
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Fuentes
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Gabinetes
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Memorias RAM
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Mothers
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Placas graficas/GPU
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Procesadores/CPU
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a className="dropdown-item" tabIndex={-1} href="#">
            Perifericos
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" tabIndex={-1} href="#">
                Auriculares
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Microfonos
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Monitores
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Mouse
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Teclados
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Webcams
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};
