import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import newsReducer from "./reducer/newsReducer";
import documentationsReducer from "./reducer/documentationsReducer";
import DAXReducer from "./reducer/DAXReducer";
import communityReducer from "./reducer/communityReducer";
import influencersReducer from "./reducer/influencersReducer";
import coursesReducer from "./reducer/coursesReducer";
import examReducer from "./reducer/examReducer";


const rootReducer = combineReducers({
    news: newsReducer,
    documentations: documentationsReducer,
    dax: DAXReducer,
    community: communityReducer,
    influencer: influencersReducer,
    course: coursesReducer,
    exam: examReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));