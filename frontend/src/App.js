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

const App = () => {
  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch()

  useEffect(() => {
    history.listen(() => {
      // clear alert when location changes
      dispatch(alertActions.clear())
    })
  }, [])

  return (
    <BrowserRouter>
      <Container>
        <Header />
        { alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;
