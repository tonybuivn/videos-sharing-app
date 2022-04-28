import { ALERT_CONSTANTS } from '../_constants'

const alert = (state = {}, action) => {
  switch(action.type) {
    case ALERT_CONSTANTS.SUCCESS:
      return { ...state, type: 'alert-success', message: action.message }

    case ALERT_CONSTANTS.ERROR:
      return { ...state, type: 'alert-danger', message: action.message }

    case ALERT_CONSTANTS.CLEAR:
      return {}

    default:
      return state
  }
}

export default alert
