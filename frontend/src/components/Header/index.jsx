import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

const Header = () => {
  const [fields, setFields] = useState({
    username: '',
    password: ''
  })
  const { username, password } = fields
  // const loggingIn = useSelector(state => state.authentication.loggingIn)

  const [submitted, setSubmitted] = useState(false)

  // Can make this to custom hooks ?
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFields(fields => ({ ...fields, [name]: value }))
  }

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
          {/* Add validation for username and password */}
          <Form className='d-flex'>
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
            <Button variant='outline-success' className='me-2' type='submit'>
              Login
            </Button>
            <Link to='/register' className='btn btn-link'>Register</Link>
          </Form>
        </Container>
      </Navbar>
      <br />
    </>
  )
}

export default Header
