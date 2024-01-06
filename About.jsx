import React from "react";
import Management2 from "../Assets/management2.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={Management2} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          become 1# project management software industry.
        </h1>
        <p className="primary-text">
        software works by providing a centralized platform for planning, executing, and managing projects. The specific functionalities may vary across different software, but the fundamental principles remain consistent. 
        </p>
        <p className="primary-text">
          if you want get more information about software please click learn more and watch the video.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;