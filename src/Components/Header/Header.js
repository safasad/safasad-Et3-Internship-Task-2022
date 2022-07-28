import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav class="navbar navbar-light ">
      <form className="container-fluid justify-content-center">
        <div className="input-group  search">
          <input
            type="text"
            className="form-control "
            placeholder="What do you want to learn gg?"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <span style={{ color: "white" }}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </button>
        </div>
        <button className="loginBtn">Login</button>
        <button
          className="btn btn mx-4 px-4 py-3 "
          style={{ backgroundColor: "orange", color: "white" , fontSize: "17px" , fontWeight: "bold"}}
        >
          Join for free
          <span className="ms-4">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </form>
    </nav>
  );
};

export default Header;
