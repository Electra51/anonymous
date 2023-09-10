import  { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Anonymous</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Food Card</a>
        <a href="/notify">Notification</a>
        <a href="/gridView">Grid View</a>
        <a href="/reactSliderCard">React Slider Card</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;