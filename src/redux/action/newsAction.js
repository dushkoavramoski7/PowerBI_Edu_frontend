import {FETCH_NEWS} from "../actionTypes";
import axios from "../../axios/axiosInstance"

export const newsAction = {
    fetchNews: () => dispatch => {
        axios.get("/news").then(resp => {
            dispatch({
                type: FETCH_NEWS,
                news: resp.data
            })
        })
    }
}