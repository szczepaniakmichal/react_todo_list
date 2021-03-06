import React from 'react';
import './App.css';
import AddTask from "./AddTask";
import TaskTodo from "./TaskTodo";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }
    }

    counter = 9;

    componentDidMount() {
        setTimeout(() => {
            fetch('data/react_todo_list.json')
                .then(respons => respons.json())
                .then(data => {
                    this.setState({
                        tasks: data.tasks
                    })
                })
        }, 1000)
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks.filter(item => item.id !== id)
        this.setState({
            tasks
        })
    }

    changeStatusTask = (id) => {
        const tasks = [...this.state.tasks];
        tasks.filter(task => {
            if (task.id === id) {
                task.active = false;
                task.finishDate = new Date().toLocaleString();
            }
        })
        this.setState({
            tasks
        })
    }

    addTask = (text, checked, date) => {
        const task = {
            "id": this.counter,
            "description": text,
            "finishDate": date,
            "important": checked,
            "active": true
        }

        this.counter++

        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
        }))
    }

    render() {
        return (
            <>
                <AddTask addTask={this.addTask}/>
                <TaskTodo tasks={this.state.tasks} deleteTask={this.deleteTask}
                          changeStatusTask={this.changeStatusTask}/>
            </>
        )
    }
}

export default App;
