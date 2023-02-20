import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Success from './pages/Success';
import Store from './pages/Store';
import Cancel from './pages/Cancel';
import { CartProvider } from './cartContext';

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
