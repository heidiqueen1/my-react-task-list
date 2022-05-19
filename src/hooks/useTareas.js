import { useState } from 'react'


const useTareas = (inicialTareas) => {
    const [tareas, setTareas] = useState(inicialTareas);

    const agregarTarea = (newTarea) => {
        newTarea.id= Date.now();


      setTareas([
        ...tareas,
        newTarea
      ])  
    }

    const eliminarTarea = (tareaId) => {
        setTareas(tareas.filter(tarea => tarea.id !== tareaId))
    }

    const editarTarea = (tareaTitle) => {
      setTareas()

    }

    return [
        tareas,
        editarTarea,
        agregarTarea,
        eliminarTarea,

    ]
 
}

export default useTareas