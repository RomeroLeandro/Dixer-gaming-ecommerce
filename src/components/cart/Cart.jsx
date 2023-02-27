import React from 'react'
import { Link } from "react-router-dom"
import { ItemList } from "../itemList/ItemList"

export const Cart = () => {
  const carrito = [{
    "id": "44",
    "idCategoria": "4",
    "idSubCategoria":"8",
    "categoria": "Perifericos",
    "nombre": "Webcam",
    "marca": "Gadnic",
    "modelo": "Camweb02",
    "precio": "10.900",
    "stock": "10",
    "img": "gadnicCamweb02.webp",
    "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nihil optio quia rem harum numquam quod ipsa provident quas ab, perspiciatis libero at iusto corporis veritatis quisquam totam, quos a quidem minima. Ad adipisci placeat ipsum expedita, veritatis ex magni illo sunt similique suscipit omnis, doloremque aliquam totam rerum voluptatem."
  }, {
    "id": "45",
    "idCategoria": "3",
    "categoria": "Sillas",
    "nombre": "Silla",
    "marca": "Ideon",
    "modelo": "Extreme Hunter Pro",
    "precio": "49.900",
    "stock": "87",
    "img": "ideonExtremeHunterPro.webp",
    "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nihil optio quia rem harum numquam quod ipsa provident quas ab, perspiciatis libero at iusto corporis veritatis quisquam totam, quos a quidem minima. Ad adipisci placeat ipsum expedita, veritatis ex magni illo sunt similique suscipit omnis, doloremque aliquam totam rerum voluptatem."
  }]
  return (
    <>
      {
        carrito.length === 0
        ?
        <>
          <h2>Carrito vacio</h2>
          <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
        </>
        :
        <div className="container cartContainer">
              <ItemList prods={carrito} plantilla="ItemCart"/>
              <div className="divButtons">
                <p>Resumen de la compra: PrecioTotal</p>
                <button className="btn btn-danger" onClick={() => console.log("Productos eliminados")}>Vaciar Carrito</button>
                <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
                <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
              </div>
          </div>
      }
    </>
  )
}
