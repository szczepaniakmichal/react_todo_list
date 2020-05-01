import React from 'react';
import './App.css';
import TaskTodo from "./TaskTodo";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            tasks: []
        }
    }

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
        console.log('del', id);
        const tasks = this.state.tasks.filter(item => item.id !== id)
        console.log(tasks);
        this.setState({
            tasks
        })
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
