import {CHANGE_ANSWER, FETCH_EXAM, FETCH_EXAMS} from "../actionTypes";
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
    changeAnswer: (questionId, answer) => {
        return {
            type: CHANGE_ANSWER,
            questionId: questionId,
            answer: answer
        }
    },
    submitAnswers: (answers, id, callback) => {
        axios.post(`/courses/exam/${id}/submit`, answers)
            .then(resp => {
                callback(resp.data);
        })
    }


}