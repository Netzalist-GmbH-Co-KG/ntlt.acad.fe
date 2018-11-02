import * as Redux from "redux"
import currentSession from "./currentSession";
import demo from "./demo";
import { IState } from '../state/IState';

export default Redux.combineReducers({ 
    demo, 
    currentSession, 
}) as Redux.Reducer<IState, Redux.Action<string>>;
