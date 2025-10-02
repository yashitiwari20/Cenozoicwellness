import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../../assets/UTREENA.png";

const products = [
  { id: 1, name: "Organic Honey", description: "Pure and natural honey.", price: "₹499", image: banner1 },
  { id: 2, name: "Herbal Tea with Long Name Example", description: "A blend of organic herbs for relaxation.", price: "₹299", image: banner1 },
  { id: 3, name: "Almond Butter", description: "100% natural almond butter.", price: "₹599", image: banner1 },
  { id: 4, name: "Coconut Oil", description: "Cold-pressed virgin coconut oil.", price: "₹399", image: banner1 },
  { id: 5, name: "Turmeric Powder", description: "Organic turmeric with curcumin boost.", price: "₹199", image: banner1 },
  { id: 6, name: "Extra Long Turmeric Powder Product Name", description: "Organic turmeric with curcumin boost.", price: "₹199", image: banner1 },
];

// Chunk array dynamically based on screen size
const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
};

const ProductCarousel = () => {
  // Determine number of items per slide based on screen width
  const getChunkSize = () => {
    if (window.innerWidth < 576) return 1; // Mobile
    if (window.innerWidth < 992) return 2; // Tablet
    return 3; // Desktop
  };

  const productChunks = chunkArray(products, getChunkSize());

  return (
    <div className="container my-5">
      <Carousel
        prevIcon={<span className="carousel-control-prev-icon custom-arrow" />}
        nextIcon={<span className="carousel-control-next-icon custom-arrow" />}
        interval={3000}
      >
        {productChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center flex-wrap">
              {chunk.map((product) => (
                <div key={product.id} className="card mx-2 my-3 flex-fill" style={{ minWidth: "15rem", maxWidth: "18rem" }}>
                 <img
  src={product.image}
  className="card-img-top"
  alt={product.name}
  style={{
    height: "220px",  // increased from 180px to 220px
    objectFit: "cover",
    borderRadius: "8px",
  }}
/>

                  <div className="card-body text-center">
                    <h5
                      className="card-title"
                      style={{
                        fontSize: product.name.length > 20 ? "1rem" : "1.2rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      title={product.name}
                    >
                      {product.name}
                    </h5>
                    <p className="card-text" style={{ fontSize: "0.9rem" }}>{product.description}</p>
                    <p className="text-success font-weight-bold" style={{ fontSize: "1rem" }}>{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom CSS for Arrows */}
      <style>{`
        .custom-arrow {
          filter: invert(43%) sepia(95%) saturate(398%) hue-rotate(85deg) brightness(90%) contrast(90%);
          width: 50px;
          height: 50px;
        }
        .card-title {
          transition: font-size 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;
