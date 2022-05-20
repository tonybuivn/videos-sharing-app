import { baseConfigs } from '../_configs'
import { useLocation } from 'react-router-dom'

const signin = (signin_input) => {
  const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signin_input)
  }

  return fetch(`${baseConfigs.API_URL}/login`, request)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage
      // to keep user logged in between page refreshes
      // TODO: need to handle data in here in more elegant style
      localStorage.setItem('auth_user', JSON.stringify(user))
      return user
  })
}

const signup = (signup_input) => {
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(signup_input)
  }

  return fetch(`${baseConfigs.API_URL}/signup`, request).then(handleResponse)
}

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('auth_user')
}

const handleResponse = (res) => {
  return res.text().then(strData => {
    const data = strData && JSON.parse(strData)
    if(data.error) {
      if(res.status === 401) {
        // auto logout if 401 (Unauthorized) response returned from api
        logout()
        // TODO: Check when handle error
        // useLocation().reload(true)
      }

      const error = (data && data.error) || res.statusText
      return Promise.reject(error)
    }
    console.log('======== 1')   
    return data
  })
}

export const userServices = {
  signin,
  signup,
  logout
}
