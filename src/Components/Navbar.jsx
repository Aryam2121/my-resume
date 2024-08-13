import React, { useState, useEffect } from "react";
const navLinks = [
  { url: "#", label: "Home" },
  { url: "#about-section", label: "About" },
  { url: "#skill-container", label: "Skills" },
  { url: "#workex-container", label: "Work Exp" },
  { url: "#projects-container", label: "Projects" },
  { url: "#publications-container", label: "Publications" },
  { url: "#certifications-container", label: "Certifications" },
  { url: "https://medium.com/@aryamanguptabilari", label: "Blogs" },
];

const Navbar = () => {
  // State for managing navigation bar opacity, mobile menu open/close, and closing animation
  const [isOpaque, setIsOpaque] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isClosingAnimation, setIsClosingAnimation] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsOpaque(window.scrollY > 220);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle mobile navigation
  const handleToggleClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setIsClosingAnimation(false);
  };

  // Function to close mobile navigation with animation
  const handleCloseClick = () => {
    setIsClosingAnimation(true);
    setTimeout(() => {
      setIsMobileNavOpen(false);
      setIsClosingAnimation(false);
    }, 500); // Adjust timeout to match animation duration
  };

  // Close mobile navigation when a navigation link is clicked
  const handleNavItemClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <>
      <header
        className={`navbar flex justify-between items-center h-14 px-48 py-10 md:px-24 ${isOpaque ? "bg-slate-950" : ""}`}
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 10000,
        }}
      >
        <div className="navbar-logo font-medium text-white">AG</div>
        <button
          className="toggle-button text-white"
          aria-label={isMobileNavOpen ? "Close mobile navigation" : "Open mobile navigation"}
          onClick={handleToggleClick}
        >
          {isMobileNavOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

        <nav className="nav-links flex font-medium text-white justify-around gap-8">
          {navLinks.map((link, index) => (
            <a key={index} href={link.url} onClick={handleNavItemClick}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`mobile-nav bg-slate-950 px-12 py-6 h-screen w-screen ${isMobileNavOpen ? "slide-in-from-left block" : isClosingAnimation ? "slide-out-to-right" : "hidden"}`}
        style={{ zIndex: 1000, position: "fixed" }}
      >
        <nav className="mobile-nav-links flex flex-col font-small text-white justify-around gap-4 mt-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              onClick={handleNavItemClick}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
