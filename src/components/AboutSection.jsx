import React from "react";
import { motion } from "framer-motion";
import banner1 from "../assets/banner4.jpg"
import logo2 from "../assets/pic.jpg"
import Header from "./Header/Header";
const AboutSection = () => {
  return (
    <div id="about" className="bg-gray-50 py-12 px-6 md:px-16 flex flex-col gap-10 items-center">
      <Header/>
      {/* Brand Story */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl relative rounded-xl overflow-hidden h-64 mt-20 md:h-80 mb-4"
      >
                <div className="relative w-full h-[400px]"> 
          <img
            src={banner1}
            alt="Ayurvedic herbs and ingredients"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent flex items-center">
          <div className="px-8 md:px-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-white text-lg max-w-md">
              Discover the journey, values, and people behind Cenozoic Organic Wellness
            </p>
          </div>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.06 }}
        className="max-w-4xl bg-white shadow-md rounded-lg p-8 border-l-4 border-green-600"
      >
        <div className="flex items-start gap-4">
          {/* <Leaf className="text-green-600 size-8 mt-1 flex-shrink-0" /> */}
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Brand Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Cenozoic Organic Wellness was born out of a deep respect for nature and a passion for holistic healing.
              Our journey began with a simple idea - to reconnect people with the timeless wisdom of Ayurveda. Over the
              years, we've grown into a trusted name, blending tradition with innovation to promote natural wellness.
            </p>
            {/* <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Founded in 2010, we started with just three signature products crafted in a small facility. Today, we
              offer over 50 premium Ayurvedic formulations, reaching customers in more than 20 countries worldwide,
              while maintaining our commitment to quality and authenticity.
            </p> */}
          </div>
        </div>
      </motion.section>

      {/* Founder's Message */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl bg-white shadow-md rounded-lg p-8 border-l-4 border-green-600"
      >
        <div className="flex items-start gap-4">
          {/* <Users className="text-green-600 size-8 mt-1 flex-shrink-0" /> */}
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">Founder's Message</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-green-100">
              <img
              src={logo2}
              alt="Dr. Diwakar Tiwari"
              width={160}
              height={160}
              className="object-cover"
            />

              </div>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "At Cenozoic Organic Wellness, we believe that true well-being is a balance of mind, body, and spirit.
                  Our mission is to empower individuals to embrace natural solutions for a healthier life. Each product
                  we create is a result of extensive research, traditional knowledge, and our unwavering commitment to
                  purity."
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  "We're not just selling products; we're sharing a lifestyle that has sustained civilizations for
                  millennia. Thank you for trusting us on your wellness journey."
                </p>
                <p className="font-semibold text-green-600 mt-4 text-right">
                  {" "}
                  - Dr. Diwakar Tiwari
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.06 }}
        className="max-w-4xl bg-white shadow-md rounded-lg p-8 border-l-4 border-green-600"
      >
        <div className="flex items-start gap-4">
          {/* <Globe className="text-green-600 size-8 mt-1 flex-shrink-0" /> */}
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-3">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be a global leader in natural wellness, nurturing healthier communities through sustainable,
                  Ayurvedic solutions.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  We envision a world where ancient wisdom and modern science work in harmony to provide holistic health
                  solutions accessible to all.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-3">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To deliver premium-quality Ayurvedic products, rooted in tradition, backed by science, and designed to
                  enhance lives naturally.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  We commit to ethical sourcing, sustainable practices, and continuous innovation while preserving the
                  authenticity of Ayurvedic principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl bg-white shadow-md rounded-lg p-8 border-l-4 border-green-600"
      >
        <div className="flex items-start gap-4">
        
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-6">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Authenticity",
                  description:
                    "We stay true to traditional Ayurvedic principles while embracing scientific validation.",
                },
                {
                  title: "Sustainability",
                  description: "We respect nature by implementing eco-friendly practices throughout our supply chain.",
                },
                {
                  title: "Quality",
                  description: "We never compromise on the purity and efficacy of our ingredients and formulations.",
                },
                {
                  title: "Transparency",
                  description: "We believe in honest communication about our products, processes, and practices.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-green-700 mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section> */}


      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl bg-white shadow-md rounded-lg p-8 border-l-4 border-green-600"
      >
        <div className="flex items-start gap-4">
         
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Sustainability Commitment</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Cenozoic Organic Wellness, sustainability isn't just a buzzword—it's woven into every aspect of our
              operations:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
             
                <div>
                  <h3 className="font-bold text-green-700">Ethical Sourcing</h3>
                  <p className="text-gray-700">
                    We work directly with farmers practicing organic cultivation, ensuring fair compensation and
                    sustainable harvesting methods.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
               
                <div>
                  <h3 className="font-bold text-green-700">Eco-Friendly Packaging</h3>
                  <p className="text-gray-700">
                    Our packaging is 100% recyclable or biodegradable, minimizing environmental impact while preserving
                    product integrity.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
              
                <div>
                  <h3 className="font-bold text-green-700">Carbon Neutrality</h3>
                  <p className="text-gray-700">
                    We've achieved carbon-neutral operations through renewable energy use and carbon offset initiatives.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
              
                <div>
                  <h3 className="font-bold text-green-700">Community Support</h3>
                  <p className="text-gray-700">
                    We reinvest in the communities that grow our herbs through education programs and healthcare
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section> */}


      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl bg-white shadow-md rounded-lg p-8 border-l-4 border-green-600"
      >
        <div className="flex items-start gap-4">
          {/* <Award className="text-green-600 size-8 mt-1 flex-shrink-0" /> */}
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Certifications</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our commitment to quality and authenticity is validated by numerous international certifications:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "ISO 9001:2015 Certified", description: "International quality management standards" },
                { name: "GMP Certified", description: "Good Manufacturing Practice compliance" },
              
              ].map((cert, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 border border-green-200">
                    {/* <Award className="text-green-600 size-8" /> */}
                  </div>
                  <h3 className="font-bold text-green-700 mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      {/* Certifications */}
      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl bg-white shadow-md rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>ISO 9001:2015 Certified</li>
          <li>GMP (Good Manufacturing Practice) Certified</li>
          <li>FDA Approved Facilities</li>
          <li>100% Organic & Natural Ingredients</li>
        </ul>
      </motion.section> */}
 <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.9 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.06 }}
  className="max-w-4xl w-full bg-gradient-to-r from-green-900/70 to-[#bbf3cf] shadow-lg rounded-lg p-8 text-white text-center"
>
  <h2 className="text-3xl font-bold mb-4">Join Our Wellness Journey</h2>
  <p className="text-lg mb-6 max-w-2xl mx-auto">
    Experience the transformative power of authentic Ayurveda with Cenozoic Organic Wellness. Explore our product
    range and embrace a healthier, more balanced lifestyle.
  </p>
  <a href="DiscoverProducts" className="hover:text-gray-100 transition-colors duration-200">Discover Our Products</a>
</motion.section>

    </div>
  );
};

export default AboutSection;
