import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Ebook from './pages/Ebook';

export default function App() {
  return (
    <Router>
      <>
        <nav className="p-4 bg-gray-200 flex gap-4">
          <Link to="/" className="text-blue-700 font-semibold">Home</Link>
          <Link to="/about" className="text-blue-700 font-semibold">About</Link>
          <Link to="/services" className="text-blue-700 font-semibold">Services</Link>
          <Link to="/contact" className="text-blue-700 font-semibold">Contact</Link>
          <Link to="/ebook" className="text-blue-700 font-semibold">E-book</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ebook" element={<Ebook />} />
        </Routes>
      </>
    </Router>
  );
}