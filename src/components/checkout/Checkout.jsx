import React from 'react';
import {useState, useRef} from 'react'
import { Link, useNavigate } from "react-router-dom";
// import context carrito
import { useCarritoContext } from "../../context/CarritoContext";
// import firebase
import { createOrdenCompra, updateProducto, getProducto } from "../../utils/firebase";
// import toastify
import { toast } from 'react-toastify'
// import css
import './Checkout.css'
export const Checkout = () => {
  const { carrito, emptyCart, totalPrice } = useCarritoContext()
  let navigate = useNavigate()
  const datosForm = useRef()

  // vallidar emails
  const [input1Value, setInput1Value] = useState("")
  const [input2Value, setInput2Value] = useState("")

  const handleInput1Change = (evento) => {
    setInput1Value(evento.target.value)}

  const handleInput2Change = (evento) => {
    setInput2Value(evento.target.value)}

  // modal validar emails
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleModalClose = () => {
    setShowModal(false);
    setModalMessage('');}

  // modal inputs vacios
  const [showModalEmpty, setShowModalEmpty] = useState(false);
  const [modalMessageEmpty, setModalMessageEmpty] = useState("");

  const handleModalCloseEmpty = () => {
    setShowModalEmpty(false);
    setModalMessageEmpty('');}

  // requerir inputs
  const requiredFields = ["nombre", "email", "dni", "celular", "direccion"];

  const consultarForm = (evento) => {
    evento.preventDefault();
    const data = new FormData(datosForm.current)
    const cliente = Object.fromEntries(data)

    // si hay inputs en blanco
    const fieldIsEmpty = requiredFields.some((field) => !cliente[field]);
    if (fieldIsEmpty) {
      setShowModalEmpty(true);
      setModalMessageEmpty("Por favor complete todos los campos.");
      return;}

    // si los emails no coinciden
    if (input1Value !== input2Value) {
      setShowModal(true);
      setModalMessage('Los campos de correo electrónico deben coincidir');
      return;}
    const aux = [...carrito]
      aux.forEach(prodCarrito => {
        getProducto(prodCarrito.id).then(prodBDD => {
          prodBDD.stock -= prodCarrito.cant
          updateProducto(prodBDD.id, prodBDD)})})

      createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
        toast.success(` Muchas gracias!, su orden de compra con el id ${ordenCompra.id} por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`)})

    evento.target.reset()
    emptyCart()
    navigate("/")}

  // formulario
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
            <input type="text"  className="input" name="nombre" />
          </div>
          <div className="inputCheckout">
            <label htmlFor="email" className="label">Email:</label>
            <input type="email" className="input"  name="email" value={input1Value} onChange={handleInput1Change}/>
          </div>
          <div className="inputCheckout">
            <label htmlFor="email" className="label"> Repetir Email:</label>
            <input type="email" className="input" name="email" value={input2Value} onChange={handleInput2Change}/>
          </div>
          <div className="inputCheckout">
            <label htmlFor="dni" className="label">Documento:</label>
            <input type="number" className="input" name="dni" />
          </div>
          <div className="inputCheckout">
            <label htmlFor="celular" className="label">Numero telefonico:</label>
            <input type="number" className="input" name="celular" />
          </div>
          <div className="inputCheckout">
            <label htmlFor="direccion" className="label">Direccion:</label>
            <input type="text" className="input" name="direccion" />
          </div>
          <button type="submit" className="buttonCheckout">Finalizar compra</button>
        </form>
        {showModal &&
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleModalClose}>&times;</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="rgba(99,96,223,255)" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
              </svg>
              <p>{modalMessage}</p>
            </div>
          </div>}
        {showModalEmpty &&
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleModalCloseEmpty}>&times;</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="rgba(99,96,223,255)" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
              </svg>
              <p>{modalMessageEmpty}</p>
            </div>
          </div>}
      </div>}
  </div>)}
