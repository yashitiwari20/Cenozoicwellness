import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo2.webp";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#add3bb] text-white px-4 py-3 md:px-6 lg:px-8 shadow-md w-full 
      flex items-center justify-between fixed top-0 left-0 z-50">

      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Cenozoic Wellness Logo"
          className="w-12 h-12 md:w-16 md:h-16 object-contain"
        />
        <h1 className="text-xl md:text-2xl font-bold">Cenozoic Organic Wellness</h1>
      </div>
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row items-center gap-6 text-lg">
  <li>
    <Link to="/Home" className="hover:text-gray-100 transition-colors duration-200">Home</Link>
  </li>
  <li>
    <Link to="/About" className="hover:text-gray-100 transition-colors duration-200">About</Link>
  </li>
  <li>
    <Link to="/Services" className="hover:text-gray-100 transition-colors duration-200">Services</Link>
  </li>
  <li>
    <Link to="/Contact" className="hover:text-gray-100 transition-colors duration-200">Contact</Link>
  </li>
  <li>
    <Link to="/DiscoverProducts" className="hover:text-gray-100 transition-colors duration-200">Products</Link>
  </li>
</ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded-lg bg-white text-green-900"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Dropdown */}
     {/* Mobile Navigation Dropdown */}
{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-[#add3bb] text-white shadow-lg md:hidden z-40">
    <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
      <li>
        <a
          href="Home"
          className="hover:text-gray-200 transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="About"
          className="hover:text-gray-200 transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="Services"
          className="hover:text-gray-200 transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="Contact"
          className="hover:text-gray-200 transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
)}

    </header>
  );
};

export default Header;
