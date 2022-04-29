import { USER_CONSTANTS } from '../_constants'

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, isLoggingIn: false, user: user } : { loggedIn: false }

const authentication = (state = initialState, action) => {
  switch(action.type) {
    case USER_CONSTANTS.LOGIN_REQUEST:
      return { ...state, isLoggingIn: true, user: action.user }
    
    case USER_CONSTANTS.LOGIN_SUCCESS:
      return { ...state, isLoggingIn: false, loggedIn: true, user: action.user }

    case USER_CONSTANTS.LOGIN_FAILURE:
      return { ...state, isLoggingIn: false, error: action.error }

    case USER_CONSTANTS.LOGOUT_REQUEST:
      return { ...state }

    default:
      return state
  }
}

export default authentication
