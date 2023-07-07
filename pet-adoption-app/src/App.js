import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Adopt from './components/Adopt';





function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Container className="content">
      <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/Adopt" element={<Adopt />} />
          <Route path="/*" element={<Navigate to="/" />} />
      </Routes>  
      </Container>
      <Footer />  
    </div>
    </Router>
  );
}

export default App;
