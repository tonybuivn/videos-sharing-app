import { USER_CONSTANTS } from '../_constants'

let user = JSON.parse(localStorage.getItem('auth_user'))
const initialState = user ? { signedIn: true, user } : {}

const authentication = (state = initialState, action) => {
  switch(action.type) {
    case USER_CONSTANTS.SIGNIN_REQUEST:
      return { isSigningIn: true, username: action.username }
    
    case USER_CONSTANTS.SIGNIN_SUCCESS:
      return { signedIn: true, user: action.user }

    case USER_CONSTANTS.SIGNIN_FAILURE:
      return { error: action.error }

    case USER_CONSTANTS.LOGOUT:
      return {}

    default:
      return state
  }
}

export default authentication
