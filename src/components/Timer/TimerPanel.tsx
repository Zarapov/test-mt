import React, { useState } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const TimerPanel: React.FC = () => {
    const [time, setTime] = useState(5);
    const timer = useTypedSelector(store => store.timer);
    const { startTimer, stopTimer } = useActions();

    return (
        <div className='timer-panel'>
            <label htmlFor='setTime'>Интервал (сек.): </label>
            <input
                id="setTime"
                type="number"
                value={time}
                onChange={e =>
                    setTime(parseInt(e.currentTarget.value))
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