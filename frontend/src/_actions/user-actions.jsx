import { USER_CONSTANTS, MESSAGES } from '../_constants'
import { userServices } from '../_services'
import { alertActions } from './alert-actions'

const signin = (signin_input, navigator) => (dispatch) => {
  dispatch(signin_request(signin_input.username))

  userServices.signin(signin_input)
    .then(
      user => {
        dispatch(signin_success(user))
        navigator('/')
        dispatch(alertActions.success(MESSAGES.SIGNIN_SUCCESS));
      },
      error => {
        dispatch(signin_failure(error))
        dispatch(alertActions.error(error))
      })
}

const signup = (signup_input, navigator) => (dispatch) => {
  dispatch(signup_request(signup_input))

  userServices.signup(signup_input)
    .then(
      user => {
        dispatch(signup_success())
        navigator('/signin')
        dispatch(alertActions.success(MESSAGES.SIGNUP_SUCCESS));
      },
      error => {
        dispatch(signup_failure())
        dispatch(alertActions.error(error))
      }
    )
}


const logout = () => {
  userServices.logout()
  return { type: USER_CONSTANTS.LOGOUT }
}

const signin_request = (username) => ({ type: USER_CONSTANTS.SIGNIN_REQUEST, username })
const signin_success = (user) => ({ type: USER_CONSTANTS.SIGNIN_SUCCESS, user })
const signin_failure = (error) => ({ type: USER_CONSTANTS.SIGNIN_FAILURE, error })
const signup_request = () => ({ type: USER_CONSTANTS.SIGNUP_REQUEST })
const signup_success = () => ({ type: USER_CONSTANTS.SIGNUP_SUCCESS })
const signup_failure = () => ({ type: USER_CONSTANTS.SIGNUP_FAILURE })

export const userActions = {
  signin,
  signup,
  logout
}
