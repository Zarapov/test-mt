import {IMessage, MessagesAction,MessagesActionTypes} from '../../types/messages';

export const addMessage = (message:IMessage):MessagesAction=>{
    return {type:MessagesActionTypes.ADD_MESSAGE,payload:message}
}
export const clearMessages = ():MessagesAction=>{
    return {type:MessagesActionTypes.CLEAR_MESSAGES}
}