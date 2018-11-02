import * as Redux from "redux" 
import * as actions from "../actions"
import { ISession } from '../state/IState'

const initialState: ISession = {
    isLoggedIn: false,
    logOnInProgress: false,
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

        case actions.ACTION_LOGON_SUCCESS:
            return logOnSuccess(state, action as actions.IActionLogOnSuccess)

        case actions.ACTION_LOGON_FAILED:
            return logOnFailed(state, action as actions.IActionLogOnFailed);

        default:
            return state;
    }
};

const tryLogon = (state: ISession = initialState, action: actions.IActionTryLogon): ISession => {

    // Already logged in or already in progress: Cannot login anymore: ToDo: Error Message?
    if (state.isLoggedIn || state.logOnInProgress) {
        return state;
    }

    return Object.assign({}, state, {logOnInProgress: true,  lastLogOnErrorMessage: "Logging in. Please wait."});
}

const logOut = (state: ISession = initialState, action: actions.IActionLogout): ISession => {

    if (state.isLoggedIn === false) { return state; }
    return initialState;

}

const logOnSuccess = (state: ISession = initialState, action: actions.IActionLogOnSuccess): ISession => {

    // Already logged in or not in progress: Cannot process: ToDo: Error Message?
    if (state.isLoggedIn || !state.logOnInProgress ) { return state; }

    return Object.assign({}, state, {isLoggedIn: true, logOnInProgress: false, currentUser: action.username, sessionStart: new Date(), lastLogOnErrorMessage: null});

}

const logOnFailed = (state: ISession = initialState, action: actions.IActionLogOnFailed): ISession => {

    // Already logged in or not in progress: Cannot process: ToDo: Error Message?
    if (state.isLoggedIn || !state.logOnInProgress ) { return state; }

    return Object.assign({}, initialState, { lastLogOnErrorMessage: "Login failed. Please retry."});

}

export default currentSession;