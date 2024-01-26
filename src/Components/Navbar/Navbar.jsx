import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function showMenu() {
        setMenuOpen(!menuOpen);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

  return (
    <nav className="navbar">
        <div class="logo">
            <span class="logo-text">SB</span>
        </div>

      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li className="nav-list-item">
            <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-120}
                onClick={closeMenu}
            >
            Home
            </Link>
        </li>

        <li className="nav-list-item">
            <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-120}
                onClick={closeMenu}
            >
            About
            </Link>
        </li>
        <li className="nav-list-item">
            <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-120}
                onClick={closeMenu}
            >
            Work Experience
            </Link>
        </li>
        <li className="nav-list-item">
            <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-120}
                onClick={closeMenu}
            >
            Skills
            </Link>
        </li>
        <li className="nav-list-item">
            <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-120}
                onClick={closeMenu}
            >
            Education
            </Link>
        </li>
        <li className="nav-list-item">
            <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-120}
                onClick={closeMenu}
            >
            Projects
            </Link>
        </li>
        <li className="nav-list-item">
            <Link
                to="testimonial"
                spy={true}
                smooth={true}
                duration={100}
                offset={-120}
                onClick={closeMenu}
            >
            Recommendations
            </Link>
        </li>
        <li className="nav-list-item">
            <Link
                to="outsidework"
                spy={true}
                smooth={true}
                duration={100}
                offset={-190}
                onClick={closeMenu}
            >
            Outside Work
            </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={showMenu}>
         {menuOpen ? "✕" : "☰"}
      </div>

    </nav>
  );
};

export default Navbar;

//&#9776;