import Task from "./Task";

function TaskList(){
    return <div>
        <ul>
            <li><Task task="Hacer desayuno y almuerzo"></Task></li>
            <li><Task task="Ajustar la casa"></Task></li>
            <li><Task task="Empezar mis labores de voluntariado social"></Task></li>
            <li><Task task="Estudiar Dev 2 hrs"></Task></li>
            <li><Task task="Testing 2 hrs"></Task></li>
        </ul>
    </div>;
}
export default TaskList;