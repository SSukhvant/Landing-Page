import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  // const button1Ref = useRef(null);
  const button2Ref = useRef(null);

  const handleButtonClick = (val) => {
    setActiveSection(val)
    button2Ref.current.click();
  };
  const [activeSection, setActiveSection] = useState("home");
  console.log(activeSection);
  useEffect(() => {
    const handleScroll = () => {
      // Determine the active section based on scroll position
      const scrollY = window.scrollY;
      // const contactSection = document.getElementById('contact').offsetTop;
      const kbSection = document.getElementById("kb").offsetTop;
      const testSection = document.getElementById("testimonials").offsetTop;

      if (scrollY < kbSection - 1) {
        setActiveSection("home"); // Change to 'home'
      } else if (scrollY < testSection) {
        setActiveSection("features"); // Change to 'features'
      } else {
        setActiveSection("contact"); // Change to 'contact'
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-sm">
        <a className="navbar-brand" href="/#">
          <img src={logo} alt="logo" className="nav-logo" />
        </a>
        <button
          ref={button2Ref}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li
              className={`nav-item ${activeSection === "home" ? "active" : ""}`}
            >
              <a
                className="nav-link"
                href="/#"
                onClick={() => handleButtonClick('home')}
              >
                Home
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="/#contact"
                onClick={() => handleButtonClick('contact')}
              >
                Pricing
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "features" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="/#kb"
                onClick={() => handleButtonClick('features')}
              >
                Features
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="/#contact"
                onClick={() => handleButtonClick('contact')}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <a href="https://www.google.com" alt="login">
              <button className="btn app__nav-btn rounded-pill px-4 py-2 shadow-sm">
                Login
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
