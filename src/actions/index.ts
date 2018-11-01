
export const ACTION_TRY_LOGON = "TRY_LOGON";
export const tryLogon = (username: string, password: string) => ({
    type: ACTION_TRY_LOGON,
    username,
    password,
  })

export const ACTION_INCREASE_COUNTER = "INCREASE_COUNTER";
export const increaseCounter = () => ({
    type: ACTION_INCREASE_COUNTER,
  })

