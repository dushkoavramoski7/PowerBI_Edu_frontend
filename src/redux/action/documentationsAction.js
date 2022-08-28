import {FETCH_DOCUMENTATIONS, EXPAND_COLLAPSE_DOC} from "../actionTypes";
import axios from "../../axios/axiosInstance"

export const documentationsAction = {
    fetchDocumentations: () => dispatch => {
        axios.get("/documentations").then(resp => {
            dispatch({
                type: FETCH_DOCUMENTATIONS,
                documentations: resp.data
            })
            console.log(resp.data)
        })
    },
    expand_collapseDoc (docId) {
        return {
            type: EXPAND_COLLAPSE_DOC,
            id: docId
        }
    }
}