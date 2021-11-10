import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createNote, updateNote } from '../redux/actions/notes';

const initialState = {
    id: null,
    title: "no title",
    content: "non content"
}

const NoteForm = ({ update, setUpdate }) => {

    const dispatch = useDispatch();
    const [note, setNote] = useState(initialState);
    const [isExpanded, setIsExpanded] = useState(false);
    const [idCreator, setIdCreator] = useState(1);
    const currentNote = useSelector(state => update ? (state.notes.find(n => n.id === update)) : null);

    useEffect(() => {
        if (currentNote) {
            setNote(currentNote);
        }
    }, [currentNote])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (!update) {
            setNote({ ...note, [name]: value, id: idCreator });
        } else {
            setNote({ ...note, [name]: value });
        }
    }

    const addNote = (e) => {
        e.preventDefault();

        if (update) {
            dispatch(updateNote(note))
            console.log(note);
        } else {
            dispatch(createNote(note));
            setIdCreator(idCreator + 1);
        }

        cancel();
    }

    const cancel = () => {
        setNote({
            id: null,
            title: "",
            content: ""
        });
        setUpdate(null);
    }

    return (
        <div>
            <form onSubmit={addNote} className="create-note">
                {isExpanded &&
                    <input
                        value={note.title}
                        onChange={handleChange}
                        name="title"
                        placeholder="Title"
                    />}

                <textarea
                    value={note.content}
                    onChange={handleChange}
                    onClick={() => setIsExpanded(true)}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? "3" : "1"}
                />

                {update && <button className="cancel-btn" onClick={cancel}>Cancel</button>}
                <button type="submit">{update ? 'Update' : 'Add'}</button>
            </form>
        </div>

    )
}

export default NoteForm;
