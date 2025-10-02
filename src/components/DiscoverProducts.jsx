import React from "react";
import { motion } from "framer-motion";
import Header from "./Header/Header";

// Import images
import teaImg from "../assets/banner4.jpg";
import honeyImg from "../assets/banner5.jpg";
import neemPackImg from "../assets/banner6.jpg";

// Import videos
import video1 from "../assets/product.mp4";
import video2 from "../assets/product2.mp4";
import video3 from "../assets/product3.mp4";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DiscoverProducts = () => {
  const products = [
    { _id: "1", name: "Ayurvedic Herbal Tea", price: "₹250", image: teaImg },
    { _id: "2", name: "Organic Honey", price: "₹350", image: honeyImg },
    { _id: "3", name: "Rose Water", price: "₹180", image: neemPackImg },
  ];

  const videos = [
    { id: "v1", title: "Ayurvedic Herbal Tea Benefits", src: video1 },
    { id: "v2", title: "Why Choose Organic Honey?", src: video2 },
    { id: "v3", title: "Rose Water", src: video3 },
  ];

  return (
    <div>
      <Header />
      <div className="w-full min-h-screen bg-green-50 px-6 py-10 pb-20 mt-20">

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
              className="bg-white p-4 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-green-900">{product.name}</h3>
              <p className="text-green-700 font-bold">{product.price}</p>
              {/* <button className="mt-3 px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800">
                Buy Now
              </button> */}
            </motion.div>
          ))}
        </div>

        {/* Product Videos Section with Carousel */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-green-900 mb-8">Watch Our Product Reels</h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: { slidesPerView: 1 }, // mobile
              768: { slidesPerView: 2 }, // tablet
              1024: { slidesPerView: 3 }, // desktop
            }}
            className="pb-12 pt-10"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-3 hover:shadow-2xl transition h-[500px] w-[280px] mx-auto"
                >
                  
                  <video
                    controls
                    playsInline
                    muted
                    className="rounded-xl w-full h-full object-cover aspect-[9/16] py-3"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <h3 className="text-sm font-semibold text-green-900 pb-2">
                    {video.title}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.section>
      </div>
    </div>
  );
};

export default DiscoverProducts;
