import {FETCH_INFLUENCERS} from "../actionTypes";
import axios from "../../axios/axiosInstance2"

export const influencersAction = {
    fetch: () => dispatch => {
        axios.get("/channels").then(resp => {
            dispatch({
                type: FETCH_INFLUENCERS,
                channels: resp.data
            })
        })
    }
}