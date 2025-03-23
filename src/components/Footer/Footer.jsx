import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#add3bb] text-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-900 mb-2">Contact Us</h2>
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <p className="text-lg font-medium">+91 7704999888</p>
          </div>

          <p className="text-lg">Message us on <span className="font-medium">WhatsApp</span></p>

          <h3 className="text-xl font-bold text-green-900 mt-2">Cenozoic Organic Wellness</h3>
          <p className="text-sm text-gray-700">
            A, 84-85, Tatya Tope Nagar, Kanpur, Uttar Pradesh 208022, India
          </p>

          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a3.75 3.75 0 003.75-3.75V4.5a3.75 3.75 0 10-7.5 0v9.75A3.75 3.75 0 0012 18z"/>
            </svg>
            <p className="text-lg font-medium">Customer Care: 8957902883</p>
          </div>

          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <p className="text-lg">
              Email: <a href="mailto:cow22124@gmail.com" className="underline hover:text-green-600 transition">cow22124@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Product Categories 
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-900 mb-2">Our Products</h2>
          <ul className="space-y-2 text-lg">
            {["Backpacks", "Socks", "Blankets", "Coasters", "Phone Cases", "Garage/shop shelving", "Wire Mesh", "Beams", "Uprights", "Racking"].map((item, index) => (
              <li key={index} className="hover:text-green-700 transition">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        */}

        {/* New Products & Copyright */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-900 mb-2">New Arrivals</h2>
          <p className="text-lg text-gray-700">Exciting new products are coming soon! Stay tuned.</p>

          <div className="mt-6 border-t border-gray-400 pt-4">
            <p className="text-sm text-gray-600">
              &copy; 2024 <span className="font-semibold text-gray-800">Cenozoic Organic Wellness</span> - All Rights Reserved.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              Powered by <span className="font-semibold text-green-900">Cenozoic</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
