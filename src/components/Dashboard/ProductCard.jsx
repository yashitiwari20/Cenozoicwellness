import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../../assets/UTREENA.png";

const products = [
  { id: 1, name: "Organic Honey", description: "Pure and natural honey.", price: "₹499", image: banner1 },
  { id: 2, name: "Herbal Tea", description: "A blend of organic herbs for relaxation.", price: "₹299", image: banner1 },
  { id: 3, name: "Almond Butter", description: "100% natural almond butter.", price: "₹599", image: banner1 },
  { id: 4, name: "Coconut Oil", description: "Cold-pressed virgin coconut oil.", price: "₹399", image: banner1 },
  { id: 5, name: "Turmeric Powder", description: "Organic turmeric with curcumin boost.", price: "₹199", image: banner1 },
  { id: 6, name: "Turmeric Powder", description: "Organic turmeric with curcumin boost.", price: "₹199", image: banner1 },
];

const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
};

const ProductCarousel = () => {
  const productChunks = chunkArray(products, 3); // Show 3 items per slide

  return (
    <div className="container my-5">
      <Carousel
        prevIcon={<span className="carousel-control-prev-icon custom-arrow" />}
        nextIcon={<span className="carousel-control-next-icon custom-arrow" />}
      >
        {productChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {chunk.map((product) => (
                <div key={product.id} className="card mx-3" style={{ width: "15rem" }}>
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="text-success font-weight-bold">{product.price}</p>
                    <button className="btn btn-success">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom CSS for Arrow Colors */}
      <style>{`
        .custom-arrow {
          filter: invert(43%) sepia(95%) saturate(398%) hue-rotate(85deg) brightness(90%) contrast(90%);
          width: 50px;
          height: 50px;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;
