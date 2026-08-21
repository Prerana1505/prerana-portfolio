import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiGithub,
} from "react-icons/fi";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Education",
      href: "#education",
    },
    {
      name: "Contact",
      href: "#contact",
    },
    {
      name: "GitHub",
      href: "#github",
    },
  ];

  /* =========================================
     CLOSE MOBILE MENU
  ========================================= */

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* =========================================
          NAVBAR CONTAINER
      ========================================= */}

      <div className="navbar-container">

        {/* =========================================
            LOGO
        ========================================= */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={handleNavClick}
          aria-label="Go to home"
        >
          <span className="navbar-logo-box">
            P
          </span>

          <span>
            Prerana.
          </span>
        </a>


        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}

        <nav
          className="navbar-links"
          aria-label="Main navigation"
        >

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
            >
              {item.name}
            </a>
          ))}

        </nav>


        {/* =========================================
            RIGHT SIDE CONTROLS
        ========================================= */}

        <div className="navbar-actions">

          {/* GitHub */}

          <a
            href="https://github.com/Prerana1505"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon"
            aria-label="Visit GitHub profile"
          >
            <FiGithub size={19} />
          </a>


          {/* Dark / Light Mode */}

          <ThemeToggle />


          {/* Resume */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Resume
          </a>


          {/* =====================================
              MOBILE MENU BUTTON
          ===================================== */}

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FiX size={22} />
            ) : (
              <FiMenu size={22} />
            )}
          </button>

        </div>

      </div>


      {/* =========================================
          MOBILE NAVIGATION
      ========================================= */}

      <div
        className={
          menuOpen
            ? "mobile-menu open"
            : "mobile-menu"
        }
      >

        <nav
          className="mobile-menu-links"
          aria-label="Mobile navigation"
        >

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
            >
              {item.name}
            </a>
          ))}

        </nav>


        {/* Mobile Resume */}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-resume-button"
          onClick={handleNavClick}
        >
          View Resume
        </a>

      </div>

    </header>
  );
}

export default Navbar;