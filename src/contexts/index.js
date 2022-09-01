import React from "react";
import { themes, alertProps } from "../utils";

export const ThemeContext = React.createContext({
  name: themes.default,
  setTheme: () => null,
});

export const AuthContext = React.createContext({
  user: {},
  setAuth: () => null,
});

export const AlertContext = React.createContext({
  open: false,
  severity: alertProps.severity.success,
  msg: "",
  vertical: alertProps.vertical.top,
  horizontal: alertProps.horizontal.center,
  onclose: () => null,
  setSnack: () => null,
});

export const EdittablesContext = React.createContext({
  transactiondetails: null,
  transactiontable: null,
  cardstatus: null,
  channel: null,
  setPin: null,
  changepin: null,
  forgotpin: null,
  setData: () => null,
});

export const BalancePayloadContext = React.createContext({
  payload: {},
  setPayload: () => null,
});
