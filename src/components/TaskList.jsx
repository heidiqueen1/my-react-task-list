import React from 'react';
import useTareas from '../hooks/useTareas.js';


const inicialTareas = [
    { id: 1, title: 'Aprender Componentes de React'},
    { id: 2, title: 'Aprender Custom Hooks de React'},
]

const TaskList = () => {  
    const [tareas, agregarTarea, eliminarTarea, editarTarea] = useTareas(inicialTareas);

return (
    <div>
        <button onClick={() => agregarTarea( {title: 'Nueva tarea'})}>
           Add 
        </button>
        <ul>
            {tareas.map(tarea => (
            <li key= {tarea.id}>
                     {tarea.title}
              <button onClick={() => eliminarTarea(tarea.id)}>
              Borrar    
              </button>
              <button onClick={() => editarTarea ({title:''})}>
              Editar
              </button >  
            </li>
            ))}
            
        </ul>
    </div>
)

}

export default TaskList;


