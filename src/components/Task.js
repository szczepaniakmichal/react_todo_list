import React from "react";

const Task = (props) => {

    const {id, description, startDate, finishDate, important} = props.task;

    return (
        <div>
            <p><strong>{description}</strong> do {finishDate}
                <button onClick={() => props.changeStatusTask(id)}>zostało zrobione</button>
                <button onClick={() => props.deleteTask(id)}>X</button>
            </p>
        </div>
    )
}

export default Task;
