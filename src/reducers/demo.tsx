import * as actions from "../actions"
import { IDemo } from '../state/IState'

const demo = (state: IDemo = {applicationStart: Date(), reducerCounter:0 }, action: any): IDemo => {
    switch (action.type) {
      case actions.ACTION_INCREASE_COUNTER:
        return Object.assign({}, state, { reducerCounter: state.reducerCounter + 1 })
      default:
        return state;
    }
  };

  export default demo;