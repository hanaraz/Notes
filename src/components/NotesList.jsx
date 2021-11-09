import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';

const NotesList = () => {

    const notes = useSelector(state => state.notes);

    return (
        <div>
            {notes.map(note => (
                <Note key={note.id} note={note}/>
            ))}

        </div>
    )
}

export default NotesList;
