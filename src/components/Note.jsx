import React from 'react';

export const Note = () => {
    return (
        <div className="note">
            <h1>title</h1>
            <p>content</p>
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>


        </div>
    )
}

export default Note;