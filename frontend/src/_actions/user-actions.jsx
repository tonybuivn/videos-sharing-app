import { USER_CONSTANTS } from '../_constants'
import { userServices } from '../_services'
import { history } from '../_helpers'
import { alertActions } from './alert-actions'

const login = (username, password, from) => (dispatch) => {
  dispatch(login_request({ username }))

  userServices.login(username, password)
    .then(
      user => {
        dispatch(login_success(user))
        history.push(from)
      },
      error => {
        dispatch(login_failure(error))
        dispatch(alertActions.error(error))
      })
}

const login_request = (user) => ({ type: USER_CONSTANTS.LOGIN_REQUEST, user })
const login_success = (user) => ({ type: USER_CONSTANTS.LOGIN_SUCCESS, user })
const login_failure = (error) => ({ type: USER_CONSTANTS.LOGIN_FAILURE, error })

export const userActions = {
  login,
}
