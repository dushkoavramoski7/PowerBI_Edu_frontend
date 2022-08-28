import {FETCH_DOCUMENTATIONS, EXPAND_COLLAPSE_DOC} from "../actionTypes";
import {replaceObjInArray} from "../../utils/utils";


const initialState = {
    documentations: [],
    docExpand: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOCUMENTATIONS: {
            return {
                ...state,
                documentations: action.documentations,
                docExpand: action.documentations.map((doc) => ([doc.id, false]))
            }
        }
        case EXPAND_COLLAPSE_DOC: {
            let oldDoc = state.docExpand.find((doc) => doc[0] === action.id);
            console.log(oldDoc)
            let newDoc = [action.id, !oldDoc[1]];
            return {
                ...state,
                docExpand: replaceObjInArray(newDoc, oldDoc, state.docExpand)
            }
        }
        default:
            return state
    }
}
export default reducer;