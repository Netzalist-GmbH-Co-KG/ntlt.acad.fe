import * as  Redux from  "redux"
import * as moment from "moment";
import { ILogger } from '../state/IState'
import * as actions from "../actions"

const initialState : ILogger = {
  active: false,
  visible: false,
  logs: []
}

const logger = (state: ILogger = initialState, action: Redux.Action<string>): ILogger => {

    let newState: ILogger;
    switch (action.type) {
        case actions.ACTION_SHOW_LOGS:
            newState = Object.assign( {}, state, { visible: true });
            break;
        case actions.ACTION_HIDE_LOGS:
            newState = Object.assign( {}, state, { visible: false });
            break;
        case actions.ACTION_ENABLE_LOGS:
            newState = Object.assign( {}, state, { active: true });
            break;
        default:
           newState = state;
    }

    if(!newState.active) { return newState };

    const newLogLine = `${ moment(new Date()).format("hh:mm:ss")} - ${JSON.stringify(action)}`;
    console.log(newLogLine);

    if(newState.logs.length>1000) {
        newState = Object.assign({}, newState, { logs:  [...newState.logs.slice(2), newLogLine ] })
    } else {
        newState = Object.assign({}, newState, { logs:  [...newState.logs, newLogLine] })
    }

    if (action.type === actions.ACTION_DISABLE_LOGS) { newState = Object.assign( {}, newState, { active: false })};

    return newState;

};

export default logger;