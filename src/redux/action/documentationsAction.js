import {FETCH_DOCUMENTATIONS} from "../actionTypes";
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
    }
}