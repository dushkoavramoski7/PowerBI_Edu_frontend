import {FETCH_EXAMS, FETCH_EXAM, CHANGE_ANSWER} from "../actionTypes";
import {replaceObjInArray} from "../../utils/utils";

const initialState = {
    exams: [],
    exam: {},
    answers: []
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
                exam: action.exam,
                answers: action.exam.questions.map((ques) => ({id: ques.id, answer: 0}))
            }
        case CHANGE_ANSWER:
            let old_quest = state.answers.find((ans) => ans.id === action.questionId);
            let new_quest = {id: action.questionId, answer: parseInt(action.answer)};
            return {
                ...state,
                answers: replaceObjInArray(new_quest, old_quest, state.answers)
            }
        default:
            return state

    }
}
export default reducer;