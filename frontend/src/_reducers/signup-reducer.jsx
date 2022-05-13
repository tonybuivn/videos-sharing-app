import { USER_CONSTANTS } from '../_constants'

const signup = (state = {}, action) => {
  switch(action.type) {
    case USER_CONSTANTS.SIGNUP_REQUEST:
      return { ...state, isSigningUp: true}
    
    case USER_CONSTANTS.SIGNUP_SUCCESS:
      return {}

    case USER_CONSTANTS.SIGNUP_FAILURE:
      return {}

    default:
      return state
  }
}

export default signup
