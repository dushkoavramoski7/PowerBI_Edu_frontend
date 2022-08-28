import {FETCH_DOCUMENTATIONS, EXPAND_COLLAPSE_DOC, EXPAND_COLLAPSE_SERVICE} from "../actionTypes";
import axios from "../../axios/axiosInstance"

export const documentationsAction = {
    fetchDocumentations: () => dispatch => {
        axios.get("/documentations").then(resp => {
            dispatch({
                type: FETCH_DOCUMENTATIONS,
                documentations: resp.data
            })
        })
    },
    expand_collapseDoc (docId, value) {
        return {
            type: EXPAND_COLLAPSE_DOC,
            id: docId,
            value: value
        }
    },
    expand_collapseService (service) {
        return {
            type: EXPAND_COLLAPSE_SERVICE,
            service: service
        }
    }
}