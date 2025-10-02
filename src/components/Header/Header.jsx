import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo2.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="bg-[#add3bb] text-white p-4 md:p-6 lg:p-8 shadow-md w-full flex items-center justify-between fixed top-0 left-0 z-50">

  {/* Logo & Title */}
  <div className="flex items-center gap-3">
    {/* Clickable Logo */}
    <Link to="/Home" className="hover:opacity-90 transition-opacity duration-200">
      <img
        src={logo}
        alt="Cenozoic Wellness Logo"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain transition-all duration-300"
      />
    </Link>

    {/* Desktop / Large Screens: Single Line */}
    <h1 className="hidden lg:inline text-xl lg:text-2xl font-bold text-white">
      Cenozoic Organic Wellness
    </h1>

    {/* Mobile / Tablet: Stacked */}
    <div className="flex flex-col lg:hidden">
      <span className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
        Cenozoic
      </span>
      <span className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
        Organic Wellness
      </span>
    </div>
  </div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden ml-auto flex items-center justify-center p-2 rounded-lg bg-white text-green-900 transition-transform transform hover:scale-110"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>

  {/* Desktop Navigation */}
  <nav className="hidden md:flex ml-auto">
    <ul className="flex items-center gap-6 text-lg">
      <li><Link to="/Home" className="hover:text-gray-100 transition-colors duration-200">Home</Link></li>
      <li><Link to="/About" className="hover:text-gray-100 transition-colors duration-200">About</Link></li>
      <li><Link to="/Services" className="hover:text-gray-100 transition-colors duration-200">Services</Link></li>
      <li><Link to="/DiscoverProducts" className="hover:text-gray-100 transition-colors duration-200">Products</Link></li>
      <li><Link to="/Contact" className="hover:text-gray-100 transition-colors duration-200">Contact</Link></li>
    </ul>
  </nav>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="absolute top-full left-0 w-full bg-[#add3bb] text-white shadow-lg md:hidden z-40 transition-all duration-300">
      <ul className="flex flex-col items-center gap-4 py-6 text-lg font-medium">
        <li><Link to="/Home" className="hover:text-gray-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/About" className="hover:text-gray-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/Services" className="hover:text-gray-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/DiscoverProducts" className="hover:text-gray-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Products</Link></li>
        <li><Link to="/Contact" className="hover:text-gray-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </div>
  )}
</header>

  );
};

export default Header;
