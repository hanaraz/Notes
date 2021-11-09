import React from 'react';

export const Note = ({ note }) => {

    const deleteNote = () => {

    }

    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button className="edit-btn">Edit</button>
            <button className="delete-btn" onClick={deleteNote}>Delete</button>


        </div>
    )
}

export default Note;