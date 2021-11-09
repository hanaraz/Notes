import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createNote } from '../redux/actions/notes';

const initialState = {
    title: "",
    content: ""
}

const NoteForm = () => {

    const dispatch = useDispatch();
    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote({ ...note, [name]: value });
    }

    const addNote = (e) => {
        e.preventDefault();
        dispatch(createNote(note))

    }

    return (
        <div>
            <form onSubmit={addNote} className="create-note">
                {isExpanded &&
                    <input
                        onChange={handleChange}
                        name="title"
                        placeholder="Title"
                    />}

                <textarea
                    onChange={handleChange}
                    onClick={() => setIsExpanded(true)}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? "3" : "1"}
                />
                <button type="submit">Add</button>
            </form>
        </div>

    )
}

export default NoteForm;
