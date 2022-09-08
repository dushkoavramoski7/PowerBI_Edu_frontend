import {FETCH_COURSE, FETCH_COURSES, FETCH_LEARNING_PATHS, USER_LOGIN} from "../actionTypes";

const initialState = {
    courses: [],
    course: {},
    learningPaths: [],
    user: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSES: {
            return {
                ...state,
                courses: action.courses,
            }
        }
        case FETCH_COURSE: {
            return {
                ...state,
                course: action.course
            }
        }
        case FETCH_LEARNING_PATHS: {
            return {
                ...state,
                learningPaths: action.learningPaths
            }
        }
        case USER_LOGIN: {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state
    }
}
export default reducer;