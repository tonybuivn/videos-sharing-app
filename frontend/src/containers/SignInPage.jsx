import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  Form, Button
} from 'react-bootstrap'

import { userActions } from '../_actions'

const SignInPage = () => {

  const signInTextStyle = {
    fontSize: '14px',
    color: '#7f7d7d'
  }

  const navigator = useNavigate()

  const [fields, setFields] = useState({
    username: '',
    password: '',
  })
  const { username, password } = fields
  const [submitted, setSubmitted] = useState(false)
  const isSigningIn = useSelector(state => state.authentication.isSigningIn);

  const dispatch = useDispatch()

  useEffect(() => { 
    dispatch(userActions.logout()); 
  }, []);

  // TODO: custom hook
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFields(fields => ({ ...fields, [name]: value }))
  }

  const handleSignInSubmit = (evt) => {
    evt.preventDefault()

    setSubmitted(true)
    if (username && password) {
      dispatch(userActions.signin({ username, password }, navigator))
    }
  }

  // TODO: Refactor form input validation
  const isEmptyUsername = submitted && !username
  const isEmptyPassword = submitted && !password

  return (
    <div className="d-flex justify-content-center">
      <div className='border border-1 rounded-3' style={{ width: '30%' }}>
        <Form className="m-3" onSubmit={handleSignInSubmit}>
          <h3 className="text-center">Sign In</h3>
          <Form.Group className='mb-3'>
            <Form.Label className='fw-bold'>Username</Form.Label>
            <Form.Control type='text' name='username' placeholder='Enter username'
              className={ isEmptyUsername ? 'is-invalid' : '' }
              value={username}
              onChange={handleChange}
            />
            { isEmptyUsername && <span className="invalid-feedback">Username is required</span> }
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label className='fw-bold'>Password</Form.Label>
            <Form.Control type='password' name='password' placeholder='Enter password'
              className={ isEmptyPassword ? 'is-invalid' : '' }
              value={password}
              onChange={handleChange}
            />
            { isEmptyPassword && <span className="invalid-feedback">Password is required</span> }
          </Form.Group>
          <Button className='my-2 w-100' type='submit'>
            Sign In
            { isSigningIn && <span className="spinner-border spinner-border-sm ms-1 my-auto"></span>}
          </Button>
          <p className='float-end' style={signInTextStyle}>New to Video Sharing? <a href="/sign-in">Create an account</a></p>
        </Form>
      </div>
    </div>
  )
}

export default SignInPage
