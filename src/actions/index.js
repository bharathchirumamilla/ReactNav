import { LOGIN_SUCCESS, LOGOUT } from "../constants/action-types";

export function doLogin(payload) {
  return { type: LOGIN_SUCCESS, payload };
}

export function doLogout() {
    return { type: LOGOUT };
  }