import React from "react";

export const Item = ({ item }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`./img/${item.img}`}
        className="card-img-top"
        alt={`./img/${item.img}`}
      />
      <div className="card-body">
        <h5 className="card-title">
          {item.nombre} {item.marca} {item.modelo}
        </h5>
        <p className="card-text"> Marca: {item.marca}</p>
        <p className="card-text">${item.precio}</p>
        <button className="btn btn-dark">🛒 Agregar</button>
      </div>
    </div>
  );
};
