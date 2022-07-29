import React from "react";

const JoinUs = () => {
  return (
    <div className="mb-5" style={{ margin: "200px auto" }}>
      <h1 className="text-center fw-bold" style={{ color: "#252B42" }}>
        Join Us
      </h1>

      <div
        class="input-group mb-3 mt-5  "
        style={{ width: "600px", margin: "0 auto" }}
      >
        <input
          type="text"
          class="form-control"
          placeholder="Your Email"
          style={{
            backgroundColor: "#F9F9F9",
          }}
        />
        <button
          className="btn btn px-4 py-3 fw-bold"
          type="button"
          style={{ backgroundColor: "#FDB921", color: "white" }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
