import {TimerActionTypes,TimerAction} from '../../types/timer';

export const startTimer = (interval:number):TimerAction => {
    return {type:TimerActionTypes.START_TIMER,payload:interval}
}
export const stopTimer = ():TimerAction => {
    return {type:TimerActionTypes.STOP_TIMER}
}