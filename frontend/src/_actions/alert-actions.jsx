import { ALERT_CONSTANTS  } from "../_constants"

const success = (message) => ({ type: ALERT_CONSTANTS.SUCCESS, message })
const error = (message) => ({ type: ALERT_CONSTANTS.ERROR, message })
const clear = () => ({ type: ALERT_CONSTANTS.CLEAR })

export const alertActions = {
  success,
  error,
  clear
}
