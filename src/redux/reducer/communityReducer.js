import {FETCH_COMMUNITY_DOCUMENTS, FETCH_COMMUNITY_LINKS} from "../actionTypes";

const initialState = {
    documents: [],
    links: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMUNITY_DOCUMENTS: {
            return {
                ...state,
                documents: action.documents
            }
        }
        case FETCH_COMMUNITY_LINKS: {
            return {
                ...state,
                links: action.links
            }
        }
        default:
            return state
    }
}
export default reducer;
