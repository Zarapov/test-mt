export interface ITimerState{
    isActive:boolean;
    interval:number;
}
export enum TimerActionTypes{
    START_TIMER = "START_TIMER",
    STOP_TIMER = "STOP_TIMER"
}
interface StartTimerAction{
    type:TimerActionTypes.START_TIMER;
    payload:number;
}
interface StopTimerAction{
    type:TimerActionTypes.STOP_TIMER
}
export type TimerAction = StartTimerAction|StopTimerAction;