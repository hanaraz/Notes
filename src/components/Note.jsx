import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../redux/actions/notes';

export const Note = ({ note, setUpdate }) => {

    const dispatch = useDispatch();

    const removeNote = () => {
        dispatch(deleteNote(note.id));
    }

    const editNote = () => {
        setUpdate(note.id);
    }

    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button className="edit-btn" onClick={editNote}>...</button>
            <button className="delete-btn" onClick={removeNote}>X</button>

        </div>
    )
}

export default Note;