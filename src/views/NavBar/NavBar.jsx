import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-container");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 600) {
      navbar.classList.add("visible");
    } else {
      navbar.classList.remove("visible");
    }
  });

  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-items">
          {/* <Link
            to="/samples"
            smooth={true}
            duration={1000}
            className="Link-navbar"
          >
            Traslation samples
          </Link> */}
          <Link
            to="WhyTraslator"
            smooth={true}
            duration={1000}
            className="Link-navbar"
          >
            Why a traslator?
          </Link>
          <Link
            to="Publications"
            smooth={true}
            duration={1000}
            className="Link-navbar"
          >
            Publications
          </Link>
          <Link
            to="About"
            smooth={true}
            duration={1000}
            className="Link-navbar"
          >
            About me
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="Link-navbar"
          >
            Contact
          </Link>
        </div>
        <div className="navbar-menu" onClick={toggleMenu}>
          <FaBars className="bars" />
        </div>
        <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="WhyTraslator" smooth={true} duration={1000} onClick={closeMenu}>Why a translator?</Link></li>
            <li><Link to="Publications" smooth={true} duration={1000} onClick={closeMenu}>Publications</Link></li>
            <li><Link to="About" smooth={true} duration={1000} onClick={closeMenu}>About me</Link></li>
            <li><Link to="contact" smooth={true} duration={1000} onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
