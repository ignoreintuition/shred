import * as React from "react";
import { shredFooter, footerText } from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={shredFooter}>
      <div className={footerText}>Copyright SHRED 2023</div>
      <div className={footerText}>
        SHRED is a Section 501(c) (3) charitable organization, EIN 00000000
      </div>
    </footer>
  );
};

export default Footer;
