import {FETCH_DAX_FUNCTIONS, FETCH_DAX_FUNCTIONS_CATEGORIES, EXPAND_COLLAPSE_DAX_FUNCTION} from "../actionTypes";
import {replaceObjInArray} from "../../utils/utils";

const initialState = {
    daxFunctions: [],
    daxFunctionsCategories: [],
    daxFunctionExpand: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DAX_FUNCTIONS: {
            return {
                ...state,
                daxFunctions: action.daxFunctions,
                daxFunctionExpand: action.daxFunctions.map((func) => ([func.id, false]))
            }
        }
        case FETCH_DAX_FUNCTIONS_CATEGORIES: {
            return {
                ...state,
                daxFunctionsCategories: action.daxFunctionsCategories
            }
        }
        case EXPAND_COLLAPSE_DAX_FUNCTION: {
            let oldFunc = state.daxFunctionExpand.find((func) => func[0] === action.id);
            let newFunc = [action.id, action.value];
            return {
                ...state,
                daxFunctionExpand: replaceObjInArray(newFunc, oldFunc, state.daxFunctionExpand)
            }
        }
        default:
            return state
    }
}
export default reducer;