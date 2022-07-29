import React from "react";

const JoinUs = () => {
  return (
    <div className="mb-5" style={{ margin: "200px 200px 0 200px" }}>
      <h1 className="text-center fw-bold" style={{ color: "#252B42" }}>
        Join Us
      </h1>

      <div class="input-group mb-3 mt-5  ">
        <input type="text" class="form-control" placeholder="Your Email" style={{backgroundColor:'#F9F9F9'}} />
        <button
          className="btn btn px-5 py-4"
          type="button"
          style={{ backgroundColor: "#FDB921", color: "white" }}
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
