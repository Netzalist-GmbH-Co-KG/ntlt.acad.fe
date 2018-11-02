import * as Redux from "redux"
import currentSession from "./currentSession";
import demo from "./demo";
import logger from "./logger";
import { IState } from '../state/IState';

export default Redux.combineReducers({ 
    logger,
    demo, 
    currentSession, 
}) as Redux.Reducer<IState, Redux.Action<string>>;
