import { CREATE, DELETE } from "./actionTypes"

export const createNote = (note) => async(dispatch) => {
    try {
        dispatch({ type: CREATE, payload: note })
    } catch (error) {
        console.log(error);
    }
}

export const deleteNote = (id) => async(dispatch) => {
    try {
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}