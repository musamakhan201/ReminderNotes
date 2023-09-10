import React, {Component} from "react";

export default class AddNotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            responseMessage: "", // Initialize the response message state variable
        };
    }
    submitNote(event){
        event.preventDefault();
        const noteTitle = this.refs.noteTitle.value;
        const noteDescription = this.refs.noteDescription.value;

        // Check if the fields are empty
        if (!noteTitle || !noteDescription) {
            this.setState({ responseMessage: "Please fill out all fields." });
            return; // Prevent further execution if fields are empty
        }

        let note = {
            name: noteTitle,
            description: noteDescription,
        };

        fetch("http://localhost:8187/note/create",{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(note)
        })
            .then(response => response.json())
            .then((data) => {
            // Update the responseMessage state with the response data
            this.setState({ responseMessage: data.message });
            // Reload the page or perform other actions as needed
            window.location.reload();
        });
    }

    render() {
        return(
            <div className="row">
                <form className="col s12" onSubmit={this.submitNote.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input ref="noteTitle" type="text"/>
                                <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea ref="noteDescription" className="materialize-textarea"></textarea>
                                    <label htmlFor="description">Description</label>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <button className="waves-effect waves-light btn" type="submit" name="action"> ADD </button>
                        </div>
                    </div>

                    {/* Display the response message */}
                    {this.state.responseMessage && (
                        <div className="row">
                            <p>{this.state.responseMessage}</p>
                        </div>
                    )}
                </form>
            </div>

    )
    }
}