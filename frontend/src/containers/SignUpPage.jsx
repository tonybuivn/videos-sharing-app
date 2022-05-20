import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useHandleInputChange } from '../_customHooks'
import {
  Form, Button
} from 'react-bootstrap'

import { userActions } from '../_actions'

const SignUpPage = () => {

  const signInTextStyle = {
    fontSize: '14px',
    color: '#7f7d7d'
  }

  const navigator = useNavigate()

  const [fields, handleInputChange] = useHandleInputChange({
    username: '',
    password: '',
    confirmPassword: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const isSigningUp = useSelector(state => state.signup.isSigningUp);

  const { username, password, confirmPassword } = fields

  const dispatch = useDispatch()

  const handleSignUpSubmit = (evt) => {
    evt.preventDefault()

    setSubmitted(true)
    if (username && password && (password === confirmPassword)) {
      dispatch(userActions.signup({ username, password }, navigator))
    }
  }

  // TODO: Refactor form input validation
  const isEmptyUsername = submitted && !username
  const isEmptyPassword = submitted && !password
  const passwordConfirmNotMatch = submitted && (password !== confirmPassword)

  return (
    <div className="d-flex justify-content-center">
      <div className='border border-1 rounded-3' style={{ width: '30%' }}>
        <Form className="m-3" onSubmit={handleSignUpSubmit}>
          <h3 className="text-center">Sign Up</h3>
          <Form.Group className='mb-3'>
            <Form.Label className='fw-bold'>Username</Form.Label>
            <Form.Control type='text' name='username' placeholder='Enter username'
              className={ isEmptyUsername ? 'is-invalid' : '' }
              value={username}
              onChange={handleInputChange}
            />
            { isEmptyUsername && <span className="invalid-feedback">Username is required</span> }
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label className='fw-bold'>Password</Form.Label>
            <Form.Control type='password' name='password' placeholder='Enter password'
              className={ isEmptyPassword ? 'is-invalid' : '' }
              value={password}
              onChange={handleInputChange}
            />
            { isEmptyPassword && <span className="invalid-feedback">Password is required</span> }
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label className='fw-bold'>Confirm Password</Form.Label>
            <Form.Control type='password' name='confirmPassword' placeholder='Confirm password'
              className={ passwordConfirmNotMatch ? 'is-invalid' : '' }
              value={confirmPassword}
              onChange={handleInputChange}
            />
            { passwordConfirmNotMatch && <span className="invalid-feedback">Confirmation password does not match</span> }
          </Form.Group>
          <Button className='my-2 w-100' type='submit'>
            Submit
            { isSigningUp && <span className="spinner-border spinner-border-sm ms-1 my-auto"></span>}
          </Button>
          <p className='float-end' style={signInTextStyle}>Already registered <a href="/sign-in">sign in?</a></p>
        </Form>
      </div>
    </div>
  )
}

export default SignUpPage
