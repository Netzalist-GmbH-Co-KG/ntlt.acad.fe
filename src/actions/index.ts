import * as Redux from "redux";

// ------------------------------------------------------------------------
// * Try Logon
export const ACTION_TRY_LOGON = "TRY_LOGON";
export interface IActionTryLogon extends Redux.Action<string>{
  username: string,
  password: string
}
export const tryLogon = (username: string, password: string) => ({
  type: ACTION_TRY_LOGON,
  username,
  password,
}) as IActionTryLogon


// ------------------------------------------------------------------------
// * Logout
export const ACTION_LOGOUT = "LOGOUT";
export interface IActionLogout extends Redux.Action<string> {
}
export const logout = () => ({
  type: ACTION_LOGOUT,
}) as IActionLogout


// ------------------------------------------------------------------------
// * Increase Counter
export const ACTION_INCREASE_COUNTER = "INCREASE_COUNTER";
export interface IActionIncreaseCounter extends Redux.Action<string>{
}
export const increaseCounter = () => ({
  type: ACTION_INCREASE_COUNTER,
}) as IActionIncreaseCounter
