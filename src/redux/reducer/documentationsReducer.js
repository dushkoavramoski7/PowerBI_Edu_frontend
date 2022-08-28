import {FETCH_DOCUMENTATIONS, EXPAND_COLLAPSE_DOC, EXPAND_COLLAPSE_SERVICE} from "../actionTypes";
import {replaceObjInArray} from "../../utils/utils";


const initialState = {
    documentations: [],
    docExpand: [],
    serviceExpand: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOCUMENTATIONS: {
            return {
                ...state,
                documentations: action.documentations,
                docExpand: action.documentations.map((doc) => ([doc.id, true])),
                serviceExpand: [["PowerBI Desktop", true], ["PowerBI Mobile", true], ["PowerBI Service", true]]
            }
        }
        case EXPAND_COLLAPSE_DOC: {
            let oldDoc = state.docExpand.find((doc) => doc[0] === action.id);
            let newDoc = [action.id, action.value];
            return {
                ...state,
                docExpand: replaceObjInArray(newDoc, oldDoc, state.docExpand)
            }
        }
        case EXPAND_COLLAPSE_SERVICE: {
            let oldService = state.serviceExpand.find((service) => service[0] === action.service);
            let newService = [action.service, !oldService[1]];
            return {
                ...state,
                serviceExpand: replaceObjInArray(newService, oldService, state.serviceExpand)
            }
        }
        default:
            return state
    }
}
export default reducer;