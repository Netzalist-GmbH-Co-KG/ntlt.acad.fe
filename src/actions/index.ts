export const tryLogon = (username: string, password: string) => ({
    type: 'TRY_LOGON',
    username,
    password,
  })