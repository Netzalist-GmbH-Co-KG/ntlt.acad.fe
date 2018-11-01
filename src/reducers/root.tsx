import * as Redux from "redux"
import currentSession from "./currentSession";
import demo from "./demo";

export default Redux.combineReducers( { demo, currentSession })