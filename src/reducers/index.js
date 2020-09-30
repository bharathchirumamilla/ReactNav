import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'
import login from './login'

export default combineReducers({
  todos,
  counter,
  login
})