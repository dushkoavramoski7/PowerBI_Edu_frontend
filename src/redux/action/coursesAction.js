import {FETCH_COURSES, FETCH_COURSE, FETCH_LEARNING_PATHS, USER_LOGIN} from "../actionTypes";
import axios from "../../axios/axiosInstance"

export const coursesAction = {
    fetchCourses: () => dispatch => {
        axios.get("/courses").then(resp => {
            dispatch({
                type: FETCH_COURSES,
                courses: resp.data
            })
        })
    },
    fetchCourse: (id) => dispatch => {
        axios.get(`/courses/${id}`).then(resp => {
            dispatch({
                type: FETCH_COURSE,
                course: resp.data
            })
        })
    },
    fetchLearningPaths: () => dispatch => {
        axios.get("/learningPath").then(resp => {
            dispatch({
                type: FETCH_LEARNING_PATHS,
                learningPaths: resp.data
            })
        })
    },
    userLogIn (user) {
        return {
            type: USER_LOGIN,
            user: user
        }
    }
}