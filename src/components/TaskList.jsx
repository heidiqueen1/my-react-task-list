import Task from "./Task";

function TaskList(){
    return <div>
        <ul>
            <li><Task task="Ajustar la casa1"></Task></li>
            <li><Task task="Ajustar la casa2"></Task></li>
            <li><Task task="Ajustar la casa3"></Task></li>
        </ul>
    </div>;
}
export default TaskList;