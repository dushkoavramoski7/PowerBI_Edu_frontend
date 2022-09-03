import {FETCH_COURSE, FETCH_COURSES, FETCH_LEARNING_PATHS} from "../actionTypes";

const initialState = {
    courses: [],
    course: {},
    learningPaths: []
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
        default:
            return state
    }
}
export default reducer;