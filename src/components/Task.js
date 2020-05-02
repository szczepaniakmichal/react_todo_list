import React from "react";

const Task = (props) => {

    const {id, description, finishDate, active, important} = props.task;

    const importantStyle = {
        color: "red"
    }

    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? importantStyle : null}>{description}</strong> do {finishDate}
                    <button onClick={() => props.changeStatusTask(id)}>zostało zrobione</button>
                    <button onClick={() => props.deleteTask(id)}>X</button>
                </p>
            </div>
        )
    } else {
        return (
            <div>
                <p>
                    <strong>{description}</strong> zrobić do {finishDate}
                    <button onClick={() => props.deleteTask(id)}>X</button>
                    <br/>potwierdzenie wykonania <span>{finishDate}</span>
                </p>
            </div>
        )
    }

}

export default Task;
