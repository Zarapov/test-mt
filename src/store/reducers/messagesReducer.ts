import {Messages,MessagesAction,MessagesActionTypes} from '../../types/messages';

const initialState:Messages = [];

export const messagesReducer = (state=initialState,action:MessagesAction):Messages=>{
    switch(action.type){
        case MessagesActionTypes.ADD_MESSAGE:
            return [action.payload].concat(state)
        case MessagesActionTypes.CLEAR_MESSAGES:
            return []
        default: return state
    }
}