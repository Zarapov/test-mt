import React, { useEffect, useRef } from 'react';
import TimerPanel from '../Timer/TimerPanel';
import Messages from '../Messages/Messages';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';
import getNextMessage from '../../helpers/messageGenerator';

const MessagesTimer:React.FC = () => {
    const messages = useTypedSelector(store=>store.messages);
    const {interval,isActive} = useTypedSelector(store=>store.timer);
    const {addMessage,clearMessages} = useActions();
    let timerId = useRef<number|undefined>(undefined);
    useEffect(()=>{
        if(isActive){
            timerId.current = window.setTimeout(function tick(){
                addMessage(getNextMessage())
                timerId.current = window.setTimeout(tick,interval*1000)
            },interval*1000)
        }else{
            window.clearTimeout(timerId.current);
        }
    },
    [isActive]);
    return (
        <div className='message-timer'>
            <TimerPanel/>
            <Messages mes={messages}/>
            <button type="button" onClick={clearMessages}>Удалить всё</button>
        </div>
    )
}
export default MessagesTimer;