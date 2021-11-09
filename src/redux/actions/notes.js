import { CREATE } from "./actionTypes"

export const createNote = (note) => (dispatch) => {
    try {
        dispatch({ type: CREATE, payload: note })
    } catch (error) {
        console.log(error);
    }
}