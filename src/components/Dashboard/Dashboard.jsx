import React from "react";
import Header from "../Header/Header";
import Banner from "../banner/Banner";
import Footer from "../Footer/Footer";
import ProductCard from "../Dashboard/ProductCard";
import { motion } from "framer-motion"; // Added

const Dashboard = () => {
  const products = [
    {
      id: 1,
      name: "Triphala Churna",
      description: "A classic Ayurvedic blend for digestive health.",
      image: "/triphala.jpg",
      price: "₹299",
    },
    {
      id: 2,
      name: "Ashwagandha Capsules",
      description: "Boost your energy and reduce stress naturally.",
      image: "/ashwagandha.jpg",
      price: "₹349",
    },
    {
      id: 3,
      name: "Neem Oil",
      description: "Natural antiseptic and skin healing properties.",
      image: "/neem.jpg",
      price: "₹199",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      {/* Banner Section */}
      <div className="mt-20 px-4">
        <Banner />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6 mt-10 mb-10">

        {/* Section Container: Two Sections Side by Side */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl">
          {/* Our Community Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.06 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-lg p-8 md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Our Community
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We're more than just a health store - we're a{" "}
              <span className="font-medium">community</span> of passionate
              individuals who believe in living healthy, active lives. When we
              come together to support each other, we achieve amazing things!
            </p>
          </motion.section>

          {/* Our Philosophy Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.06 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-lg p-8 md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Our Philosophy
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-green-600">
                Cenozoic Organic Wellness
              </span>
              , we believe that{" "}
              <span className="font-medium">
                health is a journey, not a destination
              </span>
              . We're here to support you every step of the way, whether you're
              just starting out or have been on the path to wellness for years.
            </p>
          </motion.section>
        </div>

        {/* Featured Products Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
       //   whileHover={{ scale: 1.06 }}
          className="mt-12 w-full max-w-7xl"
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Featured Products
          </h2>
          <ProductCard />
        </motion.section>

        {/* About Ayurveda Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.06 }}
          className="bg-white shadow-lg rounded-lg p-8 mt-12 max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            About Ayurveda
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ayurveda, the "Science of Life," is a traditional system of medicine
            from India. It focuses on maintaining balance between the body,
            mind, and spirit for optimal health. Discover the power of natural
            healing with our Ayurvedic products.
          </p>
        </motion.section>

        {/* Consultation Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        //  whileHover={{ scale: 1.06 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-4">
            Consult with Our Experts
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Get personalized Ayurvedic advice from our experienced
            practitioners.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-full">
            Book a Consultation
          </button>
        </motion.section>

        {/* Dosha Quiz Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.06 }}
          className="mt-12 bg-white shadow-lg rounded-lg p-8 max-w-5xl"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Discover Your Dosha
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Understanding your Dosha (Vata, Pitta, Kapha) is key to Ayurvedic
            wellness. Take our quick quiz to learn about your unique
            constitution and receive personalized recommendations.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-full">
            Take the Dosha Quiz
          </button>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
