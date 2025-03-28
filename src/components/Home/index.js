import "./index.scss";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "react-loaders";
import IconChevronRight from "./IconChevronRight";
import TypingEffect from "../Typing/TypingEffect"; 
import flyImageSrc from './../../assets/next.png';
import About from "../About";
import Project from "../Projects";
import Contact from "../Contact";

const Home = () => {
  const navigation = useNavigate();

  const canvasRef = useRef(null);

  const handleClick = () => {
    navigation("/projects");
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
    }, 4000);

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const flyImage = new Image();
    const flyImage2 = new Image();
    flyImage.src = flyImageSrc;
    flyImage2.src = flyImageSrc;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let fly = { x: width / 2, y: height / 2, size: 10 };
    let fly2 = { x: width / 2, y: height / 2, size: 10 };
    let trail = [];
    let trail2 = [];
    let t = 0; // time variable
    const a = (window.innerWidth-window.innerHeight); // constant to control the size of the lemniscate
    const b = 800;

    const updateFlyPosition = () => {
      fly.x = width / 2 + a * Math.sin(t) / (1.00001 + Math.abs(Math.cos(t/4) * Math.tan(t/3)));
      fly.y = height / 2 + a * Math.sin(t) * Math.cos(t) / (1 + Math.cos(t) * Math.cos(t));

      fly2.x = width / 2 + b * Math.sin(t/2) / (1.2 + Math.abs(Math.cos(t/2) * Math.tan(t/3)* Math.tan(t/2)));
      fly2.y = height / 2 + b * Math.sin(t/3) * Math.cos(t) / (1 + Math.cos(t) * Math.cos(t));


      t += 0.01; // increment time for the next position
      trail2.push({ x: fly2.x, y: fly2.y });
      trail.push({ x: fly.x, y: fly.y });
      if (trail.length > 75) trail.shift();
      if (trail2.length > 75) trail2.shift();
    };

    const drawFly = () => {
      ctx.clearRect(0, 0, width, height);
      

      // Draw trail
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);
      for (let i = 1; i < trail.length; i++) {
        ctx.lineTo(trail[i].x, trail[i].y);
      }
      ctx.strokeStyle = "#EEE5DA";
      ctx.lineWidth = 2;
      ctx.stroke();
      // Draw trail 2
      ctx.beginPath();
      ctx.moveTo(trail2[0].x, trail2[0].y);
      for (let i = 1; i < trail2.length; i++) {
        ctx.lineTo(trail2[i].x, trail2[i].y);
      }
      ctx.strokeStyle = "#EEE5DA";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw fly
      ctx.drawImage(flyImage, fly.x - fly.size / 2, fly.y - fly.size / 2, fly.size, fly.size);
      ctx.drawImage(flyImage2, fly2.x - fly2.size / 2, fly2.y - fly2.size / 2, fly2.size, fly2.size); 
    };

    const animate = () => {
      updateFlyPosition();
      drawFly();
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <>
      <div className="container home-page" id="home-section">
        <canvas ref={canvasRef} className="fly-canvas"></canvas>
        <div className="text-zone">
          <div className="headings">
            <h1>
              <span>Welcome to Winners Circle</span>
          
            </h1>
            <h1 className="title">
              <TypingEffect
                textArray={[
                  "T-Shirts",
                  "Hoodies",
                  "Sweatpants",
                  "Sweatshirts",
                  "Bags/Accessories",
                  "Athletic Gear",
                  "Formal Attire",
                  "...and much more"
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                delay={2000}
              />
            </h1>
          </div>
          <h2>
            <span>Delivering high quality custom apparel with precision and excellence. Elevate your brand with us. Your vision, our craft!
            </span>
          </h2>
          <div className="buttonContainer">
            <button className="btnProject" onClick={handleClick}>
            <span className="text">Get A Quote</span>
              <svg
                height="24"
                width="24"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                className="sparkle"
              >
                <IconChevronRight />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <img src={require("./../../assets/WCFC Logo_White.png")} alt="" className="home-page-pic" />
        </div>
      </div>
      <Loader type="ball-grid-pulse" color="#000" />
      <div id="about-section">
        <About />
      </div>
      <div id="projects-section">
        <Project />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    </>
  );
};

export default Home;