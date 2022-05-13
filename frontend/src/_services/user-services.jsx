import { baseConfigs } from '../_configs'
import { useLocation } from 'react-router-dom'

const login = (username, password) => {
  const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
  };

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

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('auth_user');
}

const handleResponse = (res) => {
  return res.text().then(strData => {
    const data = strData && JSON.parse(strData)
    if(data.error) {
      if(res.status === 401) {
        // auto logout if 401 (Unauthorized) response returned from api
        logout()
        // useLocation().reload(true)
      }

      const error = (data && data.error) || res.statusText
      return Promise.reject(error)
    }
    
    return data
  })
}

export const userServices = {
  login,
  logout
}
