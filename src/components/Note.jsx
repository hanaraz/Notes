import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../redux/actions/notes';

export const Note = ({ note }) => {

    const dispatch = useDispatch();

    const removeNote = () => {
        dispatch(deleteNote(note.id));
    }

    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button className="edit-btn">Edit</button>
            <button className="delete-btn" onClick={removeNote}>Delete</button>


        </div>
    )
}

export default Note;