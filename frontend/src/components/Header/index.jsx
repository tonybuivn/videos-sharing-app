import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  Container,
  Nav,
  Navbar,
  Button
} from 'react-bootstrap'

import { userActions } from '../../_actions'

const Header = () => {
  // TODO: Can call 1 useSelector ?
  const signedIn = useSelector(state => state.authentication.signedIn)
  const user = useSelector(state => state.authentication.user)
  const username = user ? user.user_info.username : undefined

  const dispatch = useDispatch()
  const navigator = useNavigate()

  // const [submitted, setSubmitted] = useState(false)

  const handleLogout = () => {
    dispatch(userActions.logout())
    navigator(0)
  }

  const notLoggedInHeader = (
    <div>
      <Link to='/signin' className='btn btn-link'>Signin</Link>
      <Link to='/signup' className='btn btn-link'>Signup</Link>
    </div>
  )
      
  const loggedInHeader = (
    <div>
      <span className='align-middle'>Welcome back, <Link to='#'>{username}</Link></span>
      <Button variant="link" onClick={handleLogout}>Logout</Button>
    </div>
  )

  const headerLink = signedIn ? loggedInHeader : notLoggedInHeader

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
          { headerLink }
        </Container>
      </Navbar>
      <br />
    </>
  )
}

export default Header
