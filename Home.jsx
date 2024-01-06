import React from "react";
import Management1 from "../Assets/management1.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Project Management System software.
          </h1>
          <p className="primary-text">
           This is the #1 Project Management Software in industry.
          </p>
          <button className="secondary-button">
            Get started<FiArrowRight/>{" "}
            
          </button>
        </div>
        <div className="home-image-section">
          <img src={Management1} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Home;