export interface ISession {
    currentUser: string,
    sessionStart: Date,
}

export interface IState {
    currentSession: ISession | null,
    applicationStart: string,
    reducerCounter: number,
}
