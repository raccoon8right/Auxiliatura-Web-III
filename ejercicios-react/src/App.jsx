import { useState } from 'react'
import Formulario from './ejercicio_uno/ejercicio_uno'
import TodoList from './ejercicio_dos/ejercicio_dos'
import './App.css'

function App() {
  const [vista, setVista] = useState('formulario')

  return (
    <div className="app-container">
      <nav className="nav-bar">
        <button className={vista === 'formulario' ? 'active' : ''} onClick={() => setVista('formulario')}>
          Ejercicio 1: Formulario
        </button>
        <button className={vista === 'lista' ? 'active' : ''} onClick={() => setVista('lista')}>
          Ejercicio 2: Lista de Tareas
        </button>
      </nav>
      <div className="vista-contenido">
        {vista === 'formulario' ? <Formulario /> : <TodoList />}
      </div>
    </div>
  )
}

export default App