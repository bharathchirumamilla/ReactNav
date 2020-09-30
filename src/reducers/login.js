import { LOGIN_SUCCESS, LOGOUT } from "../constants/action-types";

const initialState = {
    login : false
}

export default function login(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return Object.assign({}, state, {login: true} )
      case 'LOGOUT':
        return Object.assign({}, state, {login: true} )
      default:
        return state
    }
  }