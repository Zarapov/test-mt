import {IMessage, Messages} from '../types/messages'; 
const messagesArray:Messages =[
    {id:"1",text:"Сообщение 1"},
    {id:"2",text:"Сообщение 2"},
    {id:"3",text:"Сообщение 3"},
    {id:"4",text:"Сообщение 4"},
    {id:"5",text:"Сообщение 5"},
    {id:"6",text:"Сообщение 6"},
    {id:"7",text:"Сообщение 7"},
]
function* generateMessage(){
    for (let i = 0; i < messagesArray.length;i++){
        yield messagesArray[i]
    }
    return "end";
}
let gen = generateMessage();
const getNextMessage = ():IMessage=>{
    let nextValue = gen.next();
    if(nextValue.done){
        gen=generateMessage();
        nextValue = gen.next();
    }
    return nextValue.value as IMessage;
    
}
export default getNextMessage;