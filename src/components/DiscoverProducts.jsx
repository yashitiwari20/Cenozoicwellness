import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header/Header";
import axios from 'axios';

const DiscoverProducts = () => {
  const [products, setProducts] = useState([]);
  const [videos, setVideos] = useState([]);

  // Fetch products and videos from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get('http://localhost:3000/api/products');
        setProducts(productsResponse.data);

        const videosResponse = await axios.get('http://localhost:3000/api/videos');
        setVideos(videosResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="w-full min-h-screen bg-green-50 px-6 py-10 mt-20">
        
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-green-900">Discover Our Products</h1>
          <p className="text-lg text-green-700">
            Experience the best of Ayurveda with our carefully curated organic products.
          </p>
        </motion.section>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <motion.div
              key={product._id}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-green-900">{product.name}</h3>
              <p className="text-green-700 font-bold">{product.price}</p>
              <button className="mt-3 px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800">
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Product Videos Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-green-900 mb-6">Watch Our Product Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((video) => (
              <motion.div key={video.id} whileHover={{ scale: 1.03 }} className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-semibold text-green-900 mb-3">{video.title}</h3>
                <iframe
                  width="100%"
                  height="250"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DiscoverProducts;
