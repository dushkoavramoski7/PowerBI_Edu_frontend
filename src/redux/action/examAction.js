import {FETCH_EXAM, FETCH_EXAMS} from "../actionTypes";
import axios from "../../axios/axiosInstance"


export const examAction = {

    fetchExams: () => dispatch => {
        axios.get("/courses/exams").then(resp => {
            dispatch({
                type: FETCH_EXAMS,
                exams: resp.data
            })
        })
    },
    fetchExam: (id) => dispatch => {
        axios.get(`/courses/exams/${id}`).then(resp => {
            dispatch({
                type: FETCH_EXAM,
                exam: resp.data
            })
        })
    },


}