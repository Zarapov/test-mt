import { combineReducers } from "redux";
import {timerReducer} from './timerReducer';
import { messagesReducer } from "./messagesReducer";
export const rootReducer = combineReducers({
    timer:timerReducer,
    messages:messagesReducer,
})
export type RootState = ReturnType<typeof rootReducer>;