import {FETCH_INFLUENCERS} from "../actionTypes";

const initialState = {
    channels: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INFLUENCERS: {
            return {
                ...state,
                channels: action.channels
            }
        }
        default:
            return state
    }
}
export default reducer;