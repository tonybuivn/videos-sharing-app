import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Navbar from './components/Navbar'
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        {/* <Navbar /> */}
        <div className="App">
          <header className="App-header">
            Hello World! This is React
          </header>
        </div>
      </Container>
    </BrowserRouter>
  )
}

export default App;
