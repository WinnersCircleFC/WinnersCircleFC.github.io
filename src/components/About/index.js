/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import React from "react";
import { FaJava } from "react-icons/fa";

import Loader from "react-loaders";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [isLoading, setIsLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    const letterTimerId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    const loaderTimerId = setTimeout(() => {
      setIsLoading(false);
      setFadeClass("fade-in");
    }, 500);

    return () => {
      clearTimeout(letterTimerId);
      clearTimeout(loaderTimerId);
    };
  }, []);

  if (isLoading) {
    return <Loader type="ball-grid-pulse" color="#339ecc" />;
  }

  return (
    <>
      <div className={`about-page ${fadeClass}`}>
        <div className="text-zone">
          <div className="info-card">
            <h1>
              <span>About WCFC</span>
            </h1> 
            <p>
            Winners Circle Fashion Company, LLC based in NJ, USA - proudly serves customers worldwide. We specialize in custom apparel and design, offering top-tier screen printing, embroidery, DTF transfers, sublimation, and custom sports jerseys/kits to bring your vision to life with precision. Whether you’re outfitting yourself, your organization, school, business, or team, we provide wide ranges of premium brands. Our dedication to quality craftsmanship, competitive pricing, fast turnaround times, and exceptional customer service sets us apart. We offer expert customization with no hidden fees. FREE custom graphic design to make your ideas a reality. Join the Winners Circle today and take your apparel to the next level!
            </p>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default About;
