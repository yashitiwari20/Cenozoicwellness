import React from "react";
import logo from "../../assets/logo2.webp";

const Header = () => {
  return (
    <header className="bg-[#add3bb] text-white p-4 md:p-6 lg:p-8 shadow-md w-full 
    flex flex-col md:flex-row items-center justify-between fixed top-0 left-0 z-50">

      {/* Logo & Title */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Cenozoic Wellness Logo" className="w-16 h-16 object-contain" />
        <h1 className="text-2xl font-bold">Cenozoic Organic Wellness</h1>
      </div>

      {/* Navigation */}
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row items-center gap-6 text-lg">
          <li>
            <a href="Home" className="hover:text-gray-100 transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="About" className="hover:text-gray-100 transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="Services" className="hover:text-gray-100 transition-colors duration-200">Services</a>
          </li>
          <li>
            <a href="Contact" className="hover:text-gray-100 transition-colors duration-200">Contact</a>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
