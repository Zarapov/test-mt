import * as TimerActionCreators from './timer';
import * as MessagesActionCreators from './messages';
const ActionCreators={
    ...TimerActionCreators,
    ...MessagesActionCreators
}
export default ActionCreators;