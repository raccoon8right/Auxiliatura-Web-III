import { useState } from 'react'

import './ejercicio_dos.css'

function ejercicio_dos() {
    const [tareas, setTareas] = useState([])
    const [texto, setTexto] = useState('')

    const agregarTarea = () => {
        if (texto.trim() === '') return
        const nuevaTarea = {
            id: Date.now(),
            texto: texto,
            completado: false
        }
        setTareas([...tareas, nuevaTarea])
        setTexto('')
    }

    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id))
    }

    const toggleCompletado = (id) => {
        setTareas(tareas.map(tarea =>
            tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea
        ))
    }

    const pendientes = tareas.filter(tarea => !tarea.completado).length

    return (
        <div className='container'>
            <h1>Lista Tareas</h1>
            <div className='todo-input-area'>
                <input value={texto} type="text" onChange={(e) => setTexto(e.target.value)} placeholder='Escribe una tarea...' onKeyDown={(e) => e.key === 'Enter' && agregarTarea()} />
                <button onClick={agregarTarea}>Agregar</button>
            </div>
            <p className='contador-pendientes'>Tareas pendientes: {pendientes}</p>
            <ul className='lista-tareas'>
                {tareas.map(tarea => (
                    <li key={tarea.id}>
                        <input type="checkbox" checked={tarea.completado} onChange={() => toggleCompletado(tarea.id)} />
                        <span className={tarea.completado ? 'tarea-completada' : ''}>{tarea.texto}</span>
                        <button onClick={() => eliminarTarea(tarea.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ejercicio_dos