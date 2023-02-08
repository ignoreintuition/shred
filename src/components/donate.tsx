import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { donate, donateText, donateImage } from "./donate.module.css";
const Donate = ()=> {
  return (
    <div className={donate}>
      <div className={donateImage}>
      </div>
      <div className={donateText}>
      <p>
      </p>
      </div>
    </div>
  );
};

export default Donate;
