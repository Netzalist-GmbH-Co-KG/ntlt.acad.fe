interface IState {
    currentSession: {
        currentUser: string,
        sessionStart: Date,
    } | null,
    applicationStart: string,
    reducerCounter: number,
}
export default IState;