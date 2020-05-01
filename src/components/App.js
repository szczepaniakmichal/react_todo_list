import React from 'react';
import './App.css';
import TaskTodo from "./TaskTodo";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            tasks: [
                {
                    "id": 1,
                    "description": "zadanie 1 Donec diam neque",
                    "startDate": "24/3/2020",
                    "finishDate": "3/3/2020",
                    "important": false,
                    "active": true
                },
                {
                    "id": 2,
                    "description": "zadanie 2 Maecenas",
                    "startDate": "2/11/2019",
                    "finishDate": "6/1/2020",
                    "important": true,
                    "active": false
                },
                {
                    "id": 3,
                    "description": "zadanie 3 Donec",
                    "startDate": "22/3/2020",
                    "finishDate": "26/3/2020",
                    "important": false,
                    "active": true
                },
                {
                    "id": 4,
                    "description": "zadanie 4 Suspendisse",
                    "startDate": "19/7/2019",
                    "finishDate": "12/11/2019",
                    "important": true,
                    "active": false
                },
                {
                    "id": 5,
                    "description": "zadanie 5 Curabitur",
                    "startDate": "28/11/2019",
                    "finishDate": "1/7/2019",
                    "important": true,
                    "active": true
                },
                {
                    "id": 6,
                    "description": "zadanie 6 Nam ultrices",
                    "startDate": "25/6/2019",
                    "finishDate": "13/5/2019",
                    "important": false,
                    "active": false
                },
                {
                    "id": 7,
                    "description": "zadanie 7 Morbi vestibulum",
                    "startDate": "18/7/2019",
                    "finishDate": "31/7/2019",
                    "important": false,
                    "active": false
                },
                {
                    "id": 8,
                    "description": "zadanie 8 Nulla facilisi",
                    "startDate": "4/1/2020",
                    "finishDate": "8/7/2019",
                    "important": false,
                    "active": true
                },
                {
                    "id": 9,
                    "description": "zadanie 9 Cras in purus",
                    "startDate": "11/4/2020",
                    "finishDate": "25/10/2019",
                    "important": false,
                    "active": false
                }
            ]
        }
    }

    deleteTask = (id) => {
        console.log('del', id);
    }

    changeStatusTask = (id) => {
        console.log('change status', id);
    }

    render() {
        return (
            <>
            <TaskTodo tasks={this.state.tasks} deleteTask={this.deleteTask} changeStatusTask={this.changeStatusTask}/>
            </>
        )
    }
}

export default App;
