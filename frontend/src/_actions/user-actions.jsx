import { USER_CONSTANTS, MESSAGES } from '../_constants'
import { userServices } from '../_services'
import { history } from '../_helpers'
import { alertActions } from './alert-actions'

const login = (username, password, from) => (dispatch) => {
  dispatch(login_request({ username }))

  userServices.login(username, password)
    .then(
      user => {
        dispatch(login_success(user))
        // history.push(from)
      },
      error => {
        dispatch(login_failure(error))
        dispatch(alertActions.error(error))
      })
}

const signup = (signup_input) => (dispatch) => {
  dispatch(signup_request(signup_input))

  userServices.signup(signup_input)
    .then(
      user => {
        dispatch(signup_success())
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

const login_request = (user) => ({ type: USER_CONSTANTS.LOGIN_REQUEST, user })
const login_success = (user) => ({ type: USER_CONSTANTS.LOGIN_SUCCESS, user })
const login_failure = (error) => ({ type: USER_CONSTANTS.LOGIN_FAILURE, error })
const signup_request = () => ({ type: USER_CONSTANTS.SIGNUP_REQUEST })
const signup_success = () => ({ type: USER_CONSTANTS.SIGNUP_SUCCESS })
const signup_failure = () => ({ type: USER_CONSTANTS.SIGNUP_FAILURE })

export const userActions = {
  login,
  signup,
  logout
}
