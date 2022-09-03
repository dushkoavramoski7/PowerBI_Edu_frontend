import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import newsReducer from "./reducer/newsReducer";
import documentationsReducer from "./reducer/documentationsReducer";
import DAXReducer from "./reducer/DAXReducer";
import communityReducer from "./reducer/communityReducer";
import influencersReducer from "./reducer/influencersReducer";
import coursesReducer from "./reducer/coursesReducer";


const rootReducer = combineReducers({
    news: newsReducer,
    documentations: documentationsReducer,
    dax: DAXReducer,
    community: communityReducer,
    influencer: influencersReducer,
    course: coursesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));