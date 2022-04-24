import React from 'react';
import {Messages as MessagesType} from '../../types/messages';
const Messages:React.FC<{mes:MessagesType}> = ({mes})=>{
    return(
        <div className='messages-block'>
            {
                mes.map((message,index)=>{
                    return <div key={message.id+"_"+index} className="message">{message.text}</div>
                })
            }
        </div>
    )
}
export default Messages;