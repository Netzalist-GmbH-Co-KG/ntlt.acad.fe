import * as actions from "../actions"
import { ISession } from '../state/IState'

const currentSession = (state: ISession | null = null, action: any): ISession | null => {
    switch (action.type) {
        case actions.ACTION_TRY_LOGON:
            if (action.username === "admin") {
                return Object.assign({}, state, {
                    currentUser: action.username,
                    sessionStart: Date(),
                })
            } else {
                return state;
            }

        case actions.ACTION_LOGOUT:
            if (state===null) { return state; }
            return null;

        default:
            return state;
    }
};

export default currentSession;