import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import Header from "./Header/Header";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n0pq2ew",
        "template_0h4ek1n",
        form.current,
        "Syw1kN1bdAMLxbgcI"
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-center",
        });
        form.current.reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <div id="contact" className="bg-white py-16 px-6 md:px-24">
       <Header/>
      <div className="max-w-6xl mx-auto mt-20">
     
        <h2 className="text-4xl font-bold text-green-700 mb-6 text-center">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-12">
          We'd love to connect with you. Drop us a message anytime!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="bg-gray-50 shadow-lg rounded-2xl p-8 space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-green-50 shadow-md rounded-2xl p-8 space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-1 flex items-center gap-2"><FaMapMarkerAlt /> Visit Us</h4>
              <p className="text-gray-700">
                Cenozoic Organic Wellness <br />
                A, 84-85, Tatya Tope Nagar, Kanpur, Uttar Pradesh 208022, India
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-1 flex items-center gap-2"><FaPhoneAlt /> Call</h4>
              <p className="text-gray-700">
                <a href="tel:8957902883" className="text-green-700 hover:underline">
                  Customer Care No. 8957902883
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-1 flex items-center gap-2"><FaEnvelope /> Email</h4>
              <p className="text-gray-700">
                <a href="mailto:cow22124@gmail.com" className="text-green-700 hover:underline">
                  cow22124@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-1">Business Hours</h4>
              <p className="text-gray-700">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Sun: Closed</p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-1">Follow Us</h4>
              <div className="flex gap-4 text-green-700 text-2xl">
                <a href="https://www.facebook.com/profile.php?id=61565700161514&sk=reviews" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-green-700 text-center mb-4">Find Us on the Map</h3>
          <div className="w-full h-[400px]">
            <iframe
              title="Cenozoic Organic Wellness Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3795781876695!2d80.31219321504234!3d26.893984783138962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3865e0ef1cbd%3A0x92ddfcb9828ae0d7!2sTatya%20Tope%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh%20208022%2C%20India!5e0!3m2!1sen!2sin!4v1713022622402"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
