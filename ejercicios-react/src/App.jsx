import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState({ nombre: "", email: "", carrera: "" })
  const [mostrarMensaje, setMostrarMensaje] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMostrarMensaje(true)
    setFormData({ nombre: "", email: "", carrera: "" })
    setTimeout(() => {
      setMostrarMensaje(false)
    }, 5000)
  }

  return (
    <div className='container'>
      <h1>REGISTRATE</h1>
      <form onSubmit={handleSubmit}>
        <input name='nombre' value={formData.nombre} onChange={handleChange} type='text' placeholder='Nombre...'></input>
        <input name='email' value={formData.email} onChange={handleChange} type='email' placeholder='Email...'></input>
        <input name='carrera' value={formData.carrera} onChange={handleChange} type='text' placeholder='Carrera...'></input>

        <button type='submit'>Registrar</button>
      </form>

      <div className='tarjeta'>
        <h3>Vista Previa</h3>
        <p><strong>Nombre:</strong> {formData.nombre}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Carrera:</strong> {formData.carrera}</p>
      </div>

      {mostrarMensaje && <div className='mensaje-exito'>¡Registro exitoso!</div>}
    </div>
  )
}

export default App