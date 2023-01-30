export enum LogTypes {
  info,
  warn,
  error
}

export enum ThemeTypes {
  DARK = 'dark',
  LIGHT = 'light'
}

export enum ThemeManagerActionType {
  SWITCH,
  GET
}

export enum NetworkRequestTypes {
  GET = 'GET',
  POST = 'POST',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}

export enum AuthTypes {
  NORMAL = 0,
  LOGIN = 1,
  SUPERVISOR = 2,
  ACCOUNTHOLDER = 3,
  ADMIN = 5,
  SUPERADMIN = 6
}

export enum LayoutTypes {
  AUTH,
  STANDART
}

export enum ButtonColorTypes {
  PRIMARY,
  SECONDARY
}
