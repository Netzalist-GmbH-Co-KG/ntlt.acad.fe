import * as actions from "../actions"
import { IState } from '../IState'

const initialState: IState = {
    applicationStart: Date(),
    reducerCounter: 0,
    currentSession: null,
}

const rootReducer = (state: IState = initialState, action: any): IState => {
    switch (action.type) {
      case actions.ACTION_TRY_LOGON:
        if (action.username === "admin") {
          return Object.assign({}, state, {
            currentSession: {
              currentUser: action.username,
              sessionStart: Date(),
            }
          })
        } else {
          return state;
        }
      case actions.ACTION_INCREASE_COUNTER:
        return Object.assign({}, state, { reducerCounter: state.reducerCounter + 1 })
      default:
        return state;
    }
  };

  export default rootReducer