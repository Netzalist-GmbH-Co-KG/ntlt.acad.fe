import * as  Redux from  "redux"
import * as actions from "../actions"
import { IDemo } from '../state/IState'

const initialState : IDemo = {
  applicationStart: Date(),
  reducerCounter: 0
}

const demo = (state: IDemo = initialState, action: Redux.Action<string>): IDemo => {
  console.log(`REDUCER-DEMO: ${JSON.stringify(action)}`);
  switch (action.type) {
    case actions.ACTION_INCREASE_COUNTER:
      return increaseCounter(state, action as actions.IActionIncreaseCounter);
    default:
      return state;
  }
};

const increaseCounter = (state: IDemo = initialState, action: actions.IActionIncreaseCounter): IDemo => {
  return Object.assign({}, state, { reducerCounter: state.reducerCounter + 1 })
}

export default demo;