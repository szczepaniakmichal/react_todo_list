import React from "react";
import Task from "./Task";

function TaskTodo(props) {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    // done.sort((x, y) => {
    // const a = Date.parse(x.finishDate);
    // const b = Date.parse(y.finishDate);
    // console.log(a);
    // console.log(b)
    // if (a < b) {
    //     return 1
    // }
    // if (a > b) {
    //     return -1
    // }
    // return 0
    // });

    active.sort((a, b) => {

        a = a.description.toLocaleLowerCase();
        b = b.description.toLocaleLowerCase();

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })

    const activeTask = active.map(task => <Task key={task.id} task={task} description={task.description}
                                                finishDate={task.finishDate} deleteTask={props.deleteTask}
                                                changeStatusTask={props.changeStatusTask}/>)

    const doneTask = done.map(task => <Task key={task.id} task={task} description={task.description}
                                            finishDate={task.finishDate} deleteTask={props.deleteTask}
                                            changeStatusTask={props.changeStatusTask}/>)

    return (
        <>
            <div>
                <h2>Lista zadań do wykonania ({activeTask.length})</h2>
                {activeTask.length > 0 ? activeTask : <p>wszystko co zostało wykonane</p>}
            </div>
            <hr/>
            <div>
                <h2>zadania wykonane ({doneTask.length})</h2>
                {doneTask.length > 5 && <span>to lista pięciu ostatnich zadań</span>}
                {doneTask.slice(0, 5)}
            </div>
        </>
    )
}

export default TaskTodo;
