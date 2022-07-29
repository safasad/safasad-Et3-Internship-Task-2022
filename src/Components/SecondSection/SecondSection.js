import React from "react";
import img from "../../assets/images/image.png";
import "./section2.css";
const SecondSection = () => {
  return (
    <div className="sectionContainer mt-5">
      <div className="position-relative d-inline-block">
        <div className="coffeeImg ">
          <img src={img} alt="coffee" />
        </div>
      </div>
      <div className="text d-inline-block">
        Make Your <br /> Own Coffee
      </div>
    </div>
  );
};

export default SecondSection;
