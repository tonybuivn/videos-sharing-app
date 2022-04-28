import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

import { userActions } from '../../_actions'

const Header = () => {
  const [fields, setFields] = useState({
    username: '',
    password: ''
  })
  const { username, password } = fields
  // TODO: Can call 1 useSelector ?
  const isLoggingIn = useSelector(state => state.authentication.isLoggingIn)
  const loggedIn = useSelector(state => state.authentication.loggedIn)

  const dispatch = useDispatch()
  const location = useLocation()

  const [submitted, setSubmitted] = useState(false)

  // Can make this to custom hooks ?
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFields(fields => ({ ...fields, [name]: value }))
  }

  // Handle submit when clicking login button
  const handleSubmit = (evt) => {
    evt.preventDefault()

    setSubmitted(true)
    if (username && password) {
      const { from } = location.state || { from: { pathname: '/' }}
      dispatch(userActions.login(username, password, from))
    }
  }

  const notLoggedInHeaderForm = (
    // Add validation for username and password
    <Form className='d-flex' onSubmit={handleSubmit}>
      <FormControl type='text' name='username' placeholder='Username'
        className='me-2'
        value={username}
        onChange={handleChange}
      />
      <FormControl type='password' name='password' placeholder='Password'
        className='me-2'
        value={password}
        onChange={handleChange}
      />
      <Button variant='outline-success' style={{display: 'flex'}} className='me-2' type='submit'>
        Login
        { isLoggingIn && <span className='spinner-border spinner-border-sm ms-1 my-auto'></span> }
      </Button>
      <Link to='/register' className='btn btn-link'>Register</Link>
    </Form>
  )
      
  const loggedInHeaderForm = (
    <Link to='/register' className='btn btn-link'>Logout</Link>
  )

  const headerForm = isLoggingIn ? loggedInHeaderForm : notLoggedInHeaderForm

  return(
    <>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Nav
            className='ms-1 me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
          >
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/about'>About</Link>
          </Nav>
          { headerForm }
        </Container>
      </Navbar>
      <br />
    </>
  )
}

export default Header
