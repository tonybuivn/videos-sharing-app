import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { history } from './_helpers'
import { alertActions } from './_actions'

// Page
import Header from './components/Header'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import SignInPage from './containers/SignInPage'
import SignUpPage from './containers/SignUpPage'

const App = () => {
  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch()

  useEffect(() => {
    history.listen(() => {
      // clear alert when location changes
      dispatch(alertActions.clear())
    })
  }, []) // passing an empty array causes the hook to only be run once when the component first loads

  return (
    <Container>
      {/* <Router location={history.location} navigator={history}> */}
      <BrowserRouter>
        <Header />
        { alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
