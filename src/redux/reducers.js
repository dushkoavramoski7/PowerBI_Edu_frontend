import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import newsReducer from "./reducer/newsReducer";
import documentationsReducer from "./reducer/documentationsReducer";


const rootReducer = combineReducers({
    news: newsReducer,
    documentations: documentationsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));