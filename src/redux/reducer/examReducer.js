import {FETCH_EXAMS, FETCH_EXAM} from "../actionTypes";

const initialState = {
    exams: [],
    exam: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXAMS:
            return {
                ...state,
                exams: action.exams
            }
        case FETCH_EXAM:
            return {
                ...state,
                exam: action.exam
            }
        default:
            return state

    }
}
export default reducer;