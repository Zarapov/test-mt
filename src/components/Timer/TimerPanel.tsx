import React, { useState } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const TimerPanel: React.FC = () => {
    const [time, setTime] = useState(5);
    const timer = useTypedSelector(store => store.timer);
    const { startTimer, stopTimer } = useActions();
    const set=(sec:string):void=>{
        const intSec=parseInt(sec);
        if(intSec<0 || isNaN(intSec)) return;
        setTime(intSec);
    }
    return (
        <div className='timer-panel'>
            <label htmlFor='setTime'>Интервал (сек.): </label>
            <input
                id="setTime"
                type="number"
                value={time}
                min="0"
                onChange={e =>
                    set(e.currentTarget.value)
                }
                disabled={timer.isActive}
            />
            <div>
                <button type='button' onClick={() => startTimer(time)}>Старт</button>
                <button type='button' onClick={stopTimer}>Стоп</button>
            </div>
        </div>
    )
}
export default TimerPanel;