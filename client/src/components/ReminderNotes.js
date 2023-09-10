import React, { Component } from "react";
import AddNotes from './AddNotes';
import SingleNote from './SingleNote';
export default class ReminderNotes extends Component{
    constructor(props) {
        super(props);
        this.state={
            notes:[],
        };
    }
    componentDidMount() {
        fetch("http://localhost:8187/note/all/notes")
            .then(response => response.json())
            .then(data => this.setState({notes: data}))
    }

    render() {
        return(
            <div>
                <div className="row">
                    <AddNotes/>
                </div>
                <div className="row">
                    {this.state.notes.map((item) => (
                        <SingleNote key={item.id} item={item}></SingleNote>
                    ))}
                </div>
            </div>
        )
    }
}