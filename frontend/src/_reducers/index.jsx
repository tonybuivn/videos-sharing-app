import { combineReducers } from 'redux'
import authentication from './authentication-reducer'
import signup from './signup-reducer'
import alert from './alert-reducer'

const rootReducer = combineReducers({
  authentication,
  signup,
  alert
})

export default rootReducer
