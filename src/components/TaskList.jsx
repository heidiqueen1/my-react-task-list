import Task from "./Task";
import '../hojas-de-estilo/TaskList.css';

function TaskList(){
    const tareas = [ "Higiene personal","Meditación matutina","Tender la cama","Hacer el almuerzo"]
    return <div  className="">
        {tareas.map(task =>{
            <Task
            tarea={task}
            />
        })
    }
    </div>;
}
export default TaskList;