export const initialState: IState = {
    demo: { 
        applicationStart: Date(),
        reducerCounter: 0
    },
    currentSession: null
}

export interface ISession {
    currentUser: string,
    sessionStart: Date,
}

export interface IDemo {
    applicationStart: string,
    reducerCounter: number,
}

export interface IState {
    currentSession: ISession | null,
    demo: IDemo
}
