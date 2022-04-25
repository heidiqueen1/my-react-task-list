function Task(props){
     const{task} = props;
   return (
   <label>
        {task}<input type="checkbox"></input>
    </label>
    );
}

export default Task;

