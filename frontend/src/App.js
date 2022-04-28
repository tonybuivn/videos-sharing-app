import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;
