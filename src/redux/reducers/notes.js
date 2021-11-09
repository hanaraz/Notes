import { CREATE } from "../actions/actionTypes";


const notesReducer = (notes = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...notes, action.payload];

        default:
            return notes;
    }
}

export default notesReducer;