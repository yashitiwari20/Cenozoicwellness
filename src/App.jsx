import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import AboutSection from "./components/AboutSection";
import DiscoverProducts from "./components/DiscoverProducts";
import Services from "./components/Services";
import Contact from "./components/Contact";
 // Make sure path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Home" element={<Dashboard />} />
        <Route path="/About" element={<AboutSection />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/DiscoverProducts" element={<DiscoverProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
