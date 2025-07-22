import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  <a href="/" className="text-blue-700 font-semibold">Home</a>
  <a href="/about" className="text-blue-700 font-semibold">About</a>
  <a href="/services" className="text-blue-700 font-semibold">Services</a>
    <a href="/contact" className="text-blue-700 font-semibold">Contact</a>
    <a href="/ebook" className="text-blue-700 font-semibold">E-book</a>
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