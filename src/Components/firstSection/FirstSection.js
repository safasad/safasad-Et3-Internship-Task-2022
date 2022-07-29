import React from "react";
import bgImg from "../../assets/images/background.png";
import './section.css'
const FirstSection = () => {
  return (
    <div className="container-fluid p-0 position-relative ">
      <img
        src={bgImg}
        alt="coffee"
        className=""
        style={{ width: "100%", height: "70vh" }}
      />
      <h1 className="position-absolute text1"> Caffee first ,</h1>
      <h1 className="position-absolute text2"> Schemes later .</h1>
    </div>
  );
};

export default FirstSection;
