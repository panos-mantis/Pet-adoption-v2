import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Adopt from './components/Adopt';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Pets from './components/Pets';
import PetDetails from './components/PetDetails';
import Species from './components/Species';







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
          <Route path="/Register" element={<Register/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/Pets" element={<Pets/>} />
          <Route path="/PetDetails" element={<PetDetails/>} />
          <Route path="/Species" element={<Species/>} />

      </Routes>  
      </Container>
      <Footer />  
    </div>
    </Router>
  );
}

export default App;
