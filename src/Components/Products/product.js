import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { products } = props;

  return (
    <div className="product row ">
      {products.map((product) => (
        <div class="card col-lg-3 col-md-6 col-sm-12 " style={{  border: "none" }}>
          <img src={product.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <div class="card-text">
              <span className="me-1" style={{ color: "yellow" }}>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="ms-1">{product.rating}</span>
              <span className="ms-1 reviews">{product.reviews} review</span>
              <span className="d-block address">{product.address}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
