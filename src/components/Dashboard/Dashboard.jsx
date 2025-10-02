import React from "react";
import Header from "../Header/Header";
import Banner from "../banner/Banner";
import Footer from "../Footer/Footer";
import ProductCard from "../Dashboard/ProductCard";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header />

      {/* Banner Section */}
      <div className="mt-24 px-4 sm:px-6 lg:px-8">
        <Banner />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Two Sections Side by Side (Community & Philosophy) */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl">
          {/* Our Community */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              Our Community
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We're more than just a health store - we're a{" "}
              <span className="font-medium">community</span> of passionate
              individuals who believe in living healthy, active lives. When we
              come together to support each other, we achieve amazing things!
            </p>
          </motion.section>

          {/* Our Philosophy */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              Our Philosophy
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-green-600">
                Cenozoic Organic Wellness
              </span>
              , we believe that{" "}
              <span className="font-medium">
                health is a journey, not a destination
              </span>
              . We're here to support you every step of the way.
            </p>
          </motion.section>
        </div>

        {/* Featured Products */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-8 text-center">
            Featured Products
          </h2>
          <ProductCard />
        </motion.section>

        {/* About Ayurveda */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            About Ayurveda
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Ayurveda, the "Science of Life," is a traditional system of medicine
            from India. It focuses on maintaining balance between the body,
            mind, and spirit for optimal health. Discover the power of natural
            healing with our Ayurvedic products.
          </p>
        </motion.section>

        {/* Consultation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-4">
            Consult with Our Experts
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Get personalized Ayurvedic advice from our experienced
            practitioners.
          </p>
          <div className="bg-[#538d6f]   text-white font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105">
  Book a Consultation
</div>

        </motion.section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
