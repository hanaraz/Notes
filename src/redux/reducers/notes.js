import { CREATE, DELETE, UPDATE } from "../actions/actionTypes";


const notesReducer = (notes = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...notes, action.payload];

        case DELETE:
            return notes.filter(note => note.id !== action.payload);

        case UPDATE:
            return notes.map(note => (note.id === action.payload.id) ? action.payload : note)

        default:
            return notes;
    }
}

export default notesReducer;