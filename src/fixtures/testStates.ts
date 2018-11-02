import { IState } from "../state/IState";

// State of the application after startup
export const initialState: IState = {
    demo: { 
      applicationStart: "2014-01-01", 
      reducerCounter: 0
    }, 
    currentSession: {
      isLoggedIn: false,
      logOnInProgress: false,
      currentUser: null,
      sessionId: null,
      sessionStart: null,
      lastLogOnErrorMessage: null,
    },
    logger: {
      active: false,
      visible: false,
      logs: [],
    },
  }