import React from "react";
import "./Highlights.css";
import { FaStar } from "react-icons/fa";

function Highlights() {
  return (
    <section className="highlights-section" id="highlights">
      <h1 className="highlights-title">Key Highlights</h1>

      <div className="highlights-grid">

        <div className="highlight-card">
          <FaStar className="star" />
          <p>Technical sessions on various topics related to computer science and informatics</p>
        </div>

        <div className="highlight-card">
          <FaStar className="star" />
          <p>Keynote addresses by experts</p>
        </div>

        <div className="highlight-card">
          <FaStar className="star" />
          <p>All accepted papers submitted to IEEE Xplore Digital Library</p>
        </div>

        <div className="highlight-card">
          <FaStar className="star" />
          <p>Publishing partner assists IEEE publication standards</p>
        </div>

        <div className="highlight-card full">
          <FaStar className="star" />
          <p>Pre-conference tutorials</p>
        </div>

      </div>
    </section>
  );
}

export default Highlights;
