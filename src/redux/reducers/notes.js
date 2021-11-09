import { CREATE, DELETE } from "../actions/actionTypes";


const notesReducer = (notes = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...notes, action.payload];

        case DELETE:
            return notes.filter(note => note.id !== action.payload);
        default:
            return notes;
    }
}

export default notesReducer;