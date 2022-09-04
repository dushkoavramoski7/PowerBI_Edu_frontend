import {FETCH_EXAM, FETCH_EXAMS} from "../actionTypes";
import axios from "../../axios/axiosInstance"


export const examAction = {

    fetchExams: () => dispatch => {
        axios.get("/exams123").then(resp => {
            dispatch({
                type: FETCH_EXAMS,
                exams: resp.data
            })
        })
    },
    fetchExam: (id) => dispatch => {
        axios.get(`/exams123/${id}`).then(resp => {
            dispatch({
                type: FETCH_EXAM,
                exam: resp.data
            })
        })
    },


}