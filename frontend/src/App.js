import React, { useEffect } from 'react'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { history } from './_helpers'
import { alertActions } from './_actions'

// Page
import Header from './components/Header'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
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
      <BrowserRouter>
      <Header />
        { alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
