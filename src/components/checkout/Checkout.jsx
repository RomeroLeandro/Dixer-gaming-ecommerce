import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { createOrdenCompra, updateProducto, getProducto } from "../../utils/firebase";
import { useState } from 'react';
import './Checkout.css'


export const Checkout = () => {
  const { carrito, emptyCart, totalPrice } = useCarritoContext()
  let navigate = useNavigate()
  const datosForm = useRef()
  const [input1Value, setInput1Value] = useState("")
  const [input2Value, setInput2Value] = useState("")

  const handleInput1Change = (event) => {
    setInput1Value(event.target.value)
  }

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value)
  }
  const consultarForm = (evento) =>{
    evento.preventDefault()
    if (input1Value !== input2Value) {
      alert('Los campos de correo electrónico deben coincidir')
      return
    }
    const data = new FormData(datosForm.current)
    const cliente = Object.fromEntries(data)
    const aux = [...carrito]
      aux.forEach(prodCarrito => {
        getProducto(prodCarrito.id).then(prodBDD => {
          prodBDD.stock -= prodCarrito.cant
          updateProducto(prodBDD.id, prodBDD)
        })
      })
      createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
        toast.success(` Muchas gracias!, su orden de compra con el id ${ordenCompra.id} por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`)
      })
    evento.target.reset()
    emptyCart()
    navigate("/")
  }
  
  return (
    <div className='containerCheckout'>
      {carrito.length === 0
      ?
      <div className='emptyCheckout'>
        <h2>Para finalizar la compra debe tener productos en el carrito.</h2>
        <Link to={"/"}><button className="emptyButton">Continuar comprando</button></Link>
      </div>
      :
      <div className="checkout">
        <form onSubmit={consultarForm} ref={datosForm}>
          <div className="inputCheckout">
            <label htmlFor="nombre" className="label">Nombre y Apellido:</label>
            <input type="text" required className="input" name="nombre" />
          </div>
          <div className="inputCheckout">
            <label htmlFor="email" className="label">Email:</label>
            <input type="email" required className="input" name="email" value={input1Value} onChange={handleInput1Change}/>
          </div>
          <div className="inputCheckout">
            <label htmlFor="email" className="label"> Repetir Email:</label>
            <input type="email" required className="input" name="email" value={input2Value} onChange={handleInput2Change}/>
          </div>
          <div className="inputCheckout">
            <label htmlFor="dni" className="label">Documento:</label>
            <input type="number" required className="input" name="dni" />
          </div>
          <div className="inputCheckout">
            <label htmlFor="celular" className="label">Numero telefonico:</label>
            <input type="number" required className="input" name="celular" />
          </div>
          <div className="inputCheckout">
            <label htmlFor="direccion" className="label">Direccion:</label>
            <input type="text" required className="input" name="direccion" />
          </div>
          <button type="submit" className="buttonCheckout">Finalizar compra</button>
        </form>
      </div>
      }
        </div>
  )
}
