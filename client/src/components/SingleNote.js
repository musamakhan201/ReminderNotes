import React, { useState } from "react";

const SingleNote = ({ item }) => {
    const [responseMessage, setResponseMessage] = useState(""); // Initialize responseMessage state

    const handleDelete = () => {
        fetch(`http://localhost:8187/note/delete?id=${item.id}`, {
            method: "POST",
        })
            .then((response) => response.json())
            .then((data) => {
                // Update the responseMessage state with the response data
                setResponseMessage(data.message);
                // Reload the page or perform other actions as needed
                window.location.reload();
            });
    };

    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{item.name}</span>
                        <p>{item.description}</p>
                    </div>
                    <div className="card-action">
                        <p>{item.created_at}</p>
                        <button className="waves-effect waves-light btn" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNote;
