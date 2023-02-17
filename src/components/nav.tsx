import * as React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./nav.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/event" className={navLinkText}>
            Events
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/gallery" className={navLinkText}>
            Gallery
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/donate" className={navLinkText}>
            Donate 
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/shop" className={navLinkText}>
            Shop
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/contact" className={navLinkText}>
           Contact 
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
