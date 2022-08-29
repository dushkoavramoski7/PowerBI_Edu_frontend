import {FETCH_DAX_FUNCTIONS, FETCH_DAX_FUNCTIONS_CATEGORIES, EXPAND_COLLAPSE_DAX_FUNCTION} from "../actionTypes";
import axios from "../../axios/axiosInstance"

export const daxAction = {
    fetchDAXFunctions: () => dispatch => {
        axios.get("/DAXFunctions").then(resp => {
            dispatch({
                type: FETCH_DAX_FUNCTIONS,
                daxFunctions: resp.data
            })
        })
    },
    fetchDAXFunctionsCategories: () => dispatch => {
        axios.get("/DAXFunctions/categories").then(resp => {
            dispatch({
                type: FETCH_DAX_FUNCTIONS_CATEGORIES,
                daxFunctionsCategories: resp.data
            })
        })
    },
    expand_collapseDaxFunc (funcId, value) {
        return {
            type: EXPAND_COLLAPSE_DAX_FUNCTION,
            id: funcId,
            value: value
        }
    },
}