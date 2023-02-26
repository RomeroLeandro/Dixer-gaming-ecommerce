import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export const Checkout = () => {
  let navigate = useNavigate()
  const datosForm = useRef()
  const consultarForm = (evento) =>{
    evento.preventDefault()
    console.log(datosForm.current)
    const data = new FormData(datosForm.current)
    const cliente = Object.fromEntries(data)
    console.log(cliente)
    evento.target.reset()
    toast.success('Muchas gracias! Su compra ha sido realizada con exito!')
    navigate("/")
  }
  return (
    <div className='container'>
      <form onSubmit={consultarForm} ref={datosForm}>
        <div className="mb3">
          <label htmlFor="nombre" className='form-label'>Nombre y Apellido</label>
          <input type="text" className='form-control' name='nombre' />
        </div>
        <div className="mb3">
          <label htmlFor="e-mail" className='form-label'>Email</label>
          <input type="email" className='form-control' name='e-mail' />
        </div>
        <div className="mb3">
          <label htmlFor="dni" className='form-label'>DNI</label>
          <input type="number" className='form-control' name='dni' />
        </div>
        <div className="mb3">
          <label htmlFor="celular" className='form-label'>Telefono</label>
          <input type="number" className='form-control' name='celular' />
        </div>
        <div className="mb3">
          <label htmlFor="direccion" className='form-label'>Direccion</label>
          <input type="text" className='form-control' name='direccion' />
        </div>
        <button type='submit' className='btn btn-dark'>Finalizar compra</button>
      </form>
    </div>
  )
}
