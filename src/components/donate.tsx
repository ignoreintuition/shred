import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { donate, donateText, donateImage, qrCode, logo } from "./donate.module.css";
const Donate = ()=> {
  return (
    <div className={donate}>
      <div className={donateImage}>
        <StaticImage src={`../images/donate.png`} alt='donate' />
      </div>
      <div className={donateText}>
        <p>
          We're out here working on making a difference for children and their families, making sure
        that they have everything they need to live their best lives.  Your donations are a great
        way to help us cover the cost of events, business expenses, and give back to their families.
        </p>
        <div className={logo}>
        <StaticImage src={`../images/Venmo_Logo.svg`} alt='venmo' />
        </div>
        <p>SHRED on Zelle: 704-806-9941</p>
        <div className={qrCode}>
        <StaticImage src={`../images/venmo.svg`} alt='venmo qr code' />
        </div>
        <div className={logo}>
        <StaticImage src={`../images/Zelle_logo.svg`} alt='zelle' />
        </div>
        <p>SHRED on Venmo: @Victor-Werany (put “SHRED” in donation comment)</p>
        <div className={qrCode}>
        <StaticImage src={`../images/venmo.svg`} alt='zelle qr code' />
        </div>
    </div>
    </div>
  );
};

export default Donate;
