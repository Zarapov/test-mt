export interface IMessage{
    id:string;
    text:string;
}

export type Messages = IMessage[];

export enum MessagesActionTypes{
    ADD_MESSAGE="ADD_MESSAGE",
    CLEAR_MESSAGES="CLEAR_MESSAGES"
}

interface AddMessageAction{
    type:MessagesActionTypes.ADD_MESSAGE;
    payload:IMessage
}
interface ClearMessagesAction{
    type:MessagesActionTypes.CLEAR_MESSAGES
}
export type MessagesAction = AddMessageAction|ClearMessagesAction;