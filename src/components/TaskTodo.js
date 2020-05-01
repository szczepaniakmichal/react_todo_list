import React from "react";
import Task from "./Task";

function TaskTodo(props) {

    const tasks = props.tasks.map(task => <Task key={task.id} task={task} description={task.description}
                                                finishDate={task.finishDate} deleteTask={props.deleteTask}
                                                changeStatusTask={props.changeStatusTask}/>)

    return (
        <>
            <div>
                <h2>Lista zadań do wykonania</h2>
                {tasks}
            </div>
            <hr/>
            <div>
                <h2>zadania wykonane (0)</h2>

            </div>
        </>
    )
}

export default TaskTodo;
