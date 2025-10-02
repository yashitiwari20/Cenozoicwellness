import React from "react";
import { motion } from "framer-motion";
import Header from "./Header/Header";

const Services = () => {
    const services = [
        {
          title: "Personal Ayurvedic Consultation",
          description:
            "Talk to our expert Ayurvedic doctors to understand your body type (dosha) and get simple, natural advice for better health.",
        },
        {
          title: "Natural Herbal Products",
          description:
            "Choose from a wide range of 100% organic herbal supplements made with age-old Ayurvedic knowledge.",
        },
        {
          title: "Body Detox & Healing Therapies",
          description:
            "Try our gentle Panchakarma therapies to cleanse your body, reduce stress, and feel more energetic.",
        },
        {
          title: "Skin & Hair Care",
          description:
            "Use natural oils and treatments made just for your body type to improve your skin glow and hair strength.",
        },
        {
          title: "Healthy Diet & Lifestyle Plans",
          description:
            "Get easy-to-follow food and routine plans based on Ayurveda to help you stay fit and happy every day.",
        },
      ];
      

  return (
    <div >
    <Header/>
    <div className="bg-gray-50 py-12 px-6 md:px-16 flex flex-col gap-10 items-center pt-30" id="services">
        
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-green-700 text-center"
      >
        Our Ayurvedic Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-500"
          >
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-lg">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;
