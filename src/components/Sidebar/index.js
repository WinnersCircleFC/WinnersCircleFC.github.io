import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/WCFC Logo_White.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faBookOpen,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useSwipeable } from "react-swipeable";
import "normalize.css";
import "./index.scss"; // make sure you import your SCSS

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Optionally close the drawer after scrolling
      setDrawerOpen(false);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setDrawerOpen(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Listen for scroll events to update the background color
  useEffect(() => {
    const pageContainer = document.querySelector('.page'); // Target the .page element
    if (!pageContainer) return;
  
    const handleScroll = () => {
      const scrollY = pageContainer.scrollTop;
      console.log("Scroll position:", scrollY);
      setScrolled(scrollY > 50);
    };
  
    handleScroll();
    pageContainer.addEventListener('scroll', handleScroll);
    return () => pageContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav-bar ${scrolled ? "scrolled" : ""}`} {...handlers}>
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav>
        <a onClick={() => scrollToSection("home-section")}>
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </a>
        <a onClick={() => scrollToSection("about-section")}>
          <FontAwesomeIcon icon={faUser} />
          <span>About</span>
        </a>
        <a onClick={() => scrollToSection("projects-section")}>
        <FontAwesomeIcon icon={faBookOpen}/>
          <span>Catalog</span>
        </a>
        <a onClick={() => scrollToSection("contact-section")}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Contact</span>
        </a>
      </nav>
      <div className="social-links">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/wcfcllc"
            >
              <FontAwesomeIcon icon={faLinkedin} color="white" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/winnerscirclefc/"
            >
              <FontAwesomeIcon icon={faInstagram} color="white" />
            </a>
          </li>
        </ul>
      </div>
      <div className="burger" onClick={toggleDrawer}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleDrawer}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <a
          onClick={() => {
            scrollToSection("home-section");
            toggleDrawer();
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            scrollToSection("about-section");
            toggleDrawer();
          }}
        >
          About
        </a>
        <a
          onClick={() => {
            scrollToSection("projects-section");
            toggleDrawer();
          }}
        >
          Catalog
        </a>
        <a
          onClick={() => {
            scrollToSection("contact-section");
            toggleDrawer();
          }}
        >
          Contact
        </a>
        <div className="social-links">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/wcfcllc"
              >
                <FontAwesomeIcon icon={faLinkedin} color="white" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/winnerscirclefc/"
              >
                <FontAwesomeIcon icon={faInstagram} color="white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
