import {ITimerState,TimerAction, TimerActionTypes} from '../../types/timer';
const initialState:ITimerState = {
    isActive:false,
    interval:0
}
export const timerReducer = (state=initialState,action:TimerAction):ITimerState =>{
    switch (action.type){
        case TimerActionTypes.START_TIMER:
            return {isActive:true,interval:action.payload}
        case TimerActionTypes.STOP_TIMER:
            return {isActive:false,interval:state.interval}
        default: return state;
    }
}