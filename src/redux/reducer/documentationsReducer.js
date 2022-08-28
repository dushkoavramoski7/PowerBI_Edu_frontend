import {FETCH_DOCUMENTATIONS} from "../actionTypes";

const initialState = {
    documentations: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOCUMENTATIONS: {
            return {
                ...state,
                documentations: action.news
            }
        }
        default:
            return state
    }
}
export default reducer;