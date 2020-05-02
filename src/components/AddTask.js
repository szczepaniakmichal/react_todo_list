import React from "react";
import './AddTask.css'

class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            checked: false,
            date: new Date().toISOString().slice(0, 10)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    handleCheckboxChange = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    }

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value,
        })
    }

    handleClickSubmit = () => {
        console.log('add ddd')
    }

    render() {
        const date = new Date();

        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        let day = date.getDate();
        day = day < 10 ? `0${day}` : day;

        const minDate = date.toISOString().slice(0, 10);
        const maxDate = `${parseInt(minDate.slice(0, 4)) + 1}-${month}-${day}`;

        return (
            <div className="form">
                <input type="text" placeholder="Dodaj zadanie" value={this.state.text}
                       onChange={this.handleInputChange}/>
                <input type="checkbox" id="important" onChange={this.handleCheckboxChange}
                       checked={this.state.checked}/>
                <label htmlFor="important">piorytet</label>
                <p>
                    <label htmlFor="date">do kiedy zrobić </label>
                    <input type="date" id="date" value={this.state.date} min={minDate} max={maxDate}
                           onChange={this.handleDateChange}/>
                </p>
                <button onClick={this.handleClickSubmit}>dodaj zadanie</button>

            </div>
        )
    }
}

export default AddTask;
