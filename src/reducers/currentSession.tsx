import * as Redux from "redux" 
import * as actions from "../actions"
import { ISession } from '../state/IState'

const initialState: ISession = {
    isLoggedIn: false,
    sessionStart: null,
    sessionId: null,
    currentUser: null,
    lastLogOnErrorMessage: null,
}

const currentSession = (state: ISession = initialState, action: Redux.Action<string>): ISession => {
    switch (action.type) {

        case actions.ACTION_TRY_LOGON:
            return tryLogon(state, action as actions.IActionTryLogon)

        case actions.ACTION_LOGOUT:
            return logOut(state, action as actions.IActionLogout);

        default:
            return state;
    }
};

const tryLogon = (state: ISession = initialState, action: actions.IActionTryLogon): ISession => {

    // Already logged in: Cannot login anymore: ToDo: Error Message?
    if (state.isLoggedIn) {
        return state;
    }

    // Here we try to log in. This is an actual call to the service, so this will have to be refactored.
    if (action.username === "admin") {
        return Object.assign({}, state, {
            isLoggedIn: true,
            currentUser: action.username,
            sessionStart: Date(),
            lastLogOnErrorMessage: null
        })
    } else {
        return Object.assign({}, state, {lastLogOnErrorMessage: "Invalid credentials. Please try again."});
    }
}

const logOut = (state: ISession = initialState, action: actions.IActionLogout): ISession => {

    if (state.isLoggedIn === false) { return state; }
    return initialState;

}

export default currentSession;