import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createNote } from '../redux/actions/notes';

const initialState = {
    id:null,
    title: "",
    content: ""
}

const NoteForm = () => {

    const dispatch = useDispatch();
    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState(initialState);
    const [idCreator , setIdCreator] = useState(0);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote({ ...note, [name]: value ,id:idCreator});
    }

    const addNote = (e) => {
        e.preventDefault();
        dispatch(createNote(note));
        setNote(initialState);
        setIdCreator(idCreator + 1);

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
                <button type="submit">Add</button>
            </form>
        </div>

    )
}

export default NoteForm;
