import {FETCH_NEWS} from "../actionTypes";

const initialState = {
    news: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS: {
            return {
                ...state,
                news: action.news
            }
        }
        default:
            return state
    }
}
export default reducer;