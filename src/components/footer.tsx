import * as React from "react";
import {shredFooter, footerText} from './footer.module.css'

const Footer = () => {
  return (
    <footer className={shredFooter}>
      <div className={footerText}>
        SHRED 2023
      </div>
    </footer>
  )
}

export default Footer