import * as Redux from "redux";

// ------------------------------------------------------------------------
// * Try Logon
export const ACTION_TRY_LOGON = "TRY_LOGON";
export interface IActionTryLogon extends Redux.Action<string>{
  username: string,
}
export const tryLogon = (username: string) => ({
  type: ACTION_TRY_LOGON,
  username,
}) as IActionTryLogon

// ------------------------------------------------------------------------
// * Logon success
export const ACTION_LOGON_SUCCESS = "LOGON_SUCCESS";
export interface IActionLogOnSuccess extends Redux.Action<string>{
  username: string,
}
export const logOnSuccess = (username: string) => ({
  type: ACTION_LOGON_SUCCESS,
  username,
}) as IActionLogOnSuccess

// ------------------------------------------------------------------------
// * Logon failed
export const ACTION_LOGON_FAILED = "LOGON_FAILED";
export interface IActionLogOnFailed extends Redux.Action<string>{
  username: string,
}
export const logOnFailed = (username: string) => ({
  type: ACTION_LOGON_FAILED,
  username,
}) as IActionLogOnFailed

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

// ------------------------------------------------------------------------
// * Show Logs
export const ACTION_SHOW_LOGS = "SHOW_LOGS";
export interface IActionShowLogs extends Redux.Action<string>{
}
export const showLogs = () => ({
  type: ACTION_SHOW_LOGS,
}) as IActionShowLogs

// ------------------------------------------------------------------------
// * Hide Logs
export const ACTION_HIDE_LOGS = "HIDE_LOGS";
export interface IActionHideLogs extends Redux.Action<string>{
}
export const hideLogs = () => ({
  type: ACTION_HIDE_LOGS,
}) as IActionHideLogs

// ------------------------------------------------------------------------
// * Enable Logs
export const ACTION_ENABLE_LOGS = "ENABLE_LOGS";
export interface IActionEnableLogs extends Redux.Action<string>{
}
export const enableLogs = () => ({
  type: ACTION_ENABLE_LOGS,
}) as IActionEnableLogs

// ------------------------------------------------------------------------
// * Disable Logs
export const ACTION_DISABLE_LOGS = "DISABLE_LOGS";
export interface IActionDisableLogs extends Redux.Action<string>{
}
export const disableLogs = () => ({
  type: ACTION_DISABLE_LOGS,
}) as IActionDisableLogs

