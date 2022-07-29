import React from "react";
import "./products.css";
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";
import img4 from "../../assets/images/image4.png";
import Product from "./product";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Coffee",
      rating: "4.4",
      reviews: 429,
      address: "New cairo egypt",
      img: img1,
    },
    {
      id: 1,
      name: "Coffee",
      rating: "4.4",
      reviews: 429,
      address: "New cairo egypt",
      img: img2,
    },

    {
      id: 1,
      name: "Coffee",
      rating: "4.4",
      reviews: 429,
      address: "New cairo egypt",
      img: img3,
    },
    {
      id: 1,
      name: "Coffee",
      rating: "4.4",
      reviews: 429,
      address: "New cairo egypt",
      img: img4,
    },
  ];
  return (
    <div className="productsCont">
      <div className="p-text">Practice advice </div>
      <h1>Coffee products</h1>
      <Product products={products} />
    </div>
  );
};

export default Products;
