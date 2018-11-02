import { IState } from "../state/IState";

// State of the application after startup
export const initialState: IState = {
    demo: { 
      applicationStart: "2014-01-01", 
      reducerCounter: 0
    }, 
    currentSession: {
      isLoggedIn: false,
      currentUser: null,
      sessionId: null,
      sessionStart: null,
      lastLogOnErrorMessage: null,
    } 
  }