import React from "react";

export default function Footer() {
  return (
    <div className="footer bg-slate-900 py-5 mx-auto" style={{ zIndex: 100, position: "relative" }}>
      <p className="footer-tagline text-white font-medium text-center">
        Connect with me
      </p>
      <ul className="socials-container flex gap-x-4 justify-center my-3">
        <li>
          <a href="mailto:aryamangupta2121@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Aryaman Gupta">
            <i className="fa-solid fa-envelope socials-icon text-white"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Aryam2121" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <i className="fa-brands fa-github socials-icon text-white"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aryaman-gupta-b077b2257/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <i className="fa-brands fa-linkedin socials-icon text-white"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/AryamanGupta21" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
            <i className="fa-brands fa-twitter socials-icon text-white"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_aryaman_gupta_01/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
            <i className="fa-brands fa-instagram socials-icon text-white"></i>
          </a>
        </li>
      </ul>
      <hr className="horizontal-line" />
      <p className="copyright text-gray-400 text-center text-xs mt-4 mb-2">
        Made with <span>❤️</span> by Aryaman Gupta
      </p>
    </div>
  );
}
