import {FETCH_COMMUNITY_DOCUMENTS, FETCH_COMMUNITY_LINKS} from "../actionTypes";
import axios from "../../axios/axiosInstance2";

export const communityAction = {
    fetchCommunityDocuments: () => dispatch => {
        axios.get("/community/documents").then(resp => {
            dispatch({
                type: FETCH_COMMUNITY_DOCUMENTS,
                documents: resp.data
            })
        })
    },
    uploadDocument: (file, description, callback) => dispatch => {
        axios.post(`/community/uploadDocument/${description}`, file)
            .then(() => {
                callback(true);
            })
            .catch(() => {
                callback(false);
            })
    },
    deleteFile: (id, callback) => dispatch => {
        axios.delete(`/community/document/delete/${id}`)
            .then(() => {
                callback(true);
            })
            .catch(() => {
                callback(false);
            })
    },
    fetchCommunityLinks: () => dispatch => {
        axios.get("/community/links").then(resp => {
            dispatch({
                type: FETCH_COMMUNITY_LINKS,
                links: resp.data
            })
        })
    },
    shareLink: (payload, callback) => dispatch => {
        axios.post('/community/addLink', payload)
            .then(() => {
                callback(true);
            })
            .catch(() => {
                callback(false);
            })
    },
    deleteLink: (id, callback) => dispatch => {
        axios.delete(`/community/link/delete/${id}`)
            .then(() => {
                callback(true);
            })
            .catch(() => {
                callback(false);
            })
    },


}