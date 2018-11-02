export interface ISession {
    isLoggedIn: boolean,
    sessionStart: Date | null,
    sessionId: string | null,
    currentUser: string | null,
    lastLogOnErrorMessage: string | null,
}

export interface IDemo {
    applicationStart: string,
    reducerCounter: number,
}

export interface IState {
    currentSession: ISession,
    demo: IDemo
}
