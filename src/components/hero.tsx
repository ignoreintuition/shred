import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { hero, heroText, heroImage } from "./hero.module.css";
const Hero = ({heroImgSrc}) => {
  return (
    <div className={hero}>
      <div className={heroImage}>
        <StaticImage src={`../images/hero.png`} alt='kid' />
      </div>
      <div className={heroText}>
        <p>
          Now in its 10th year, SHRED is an annual skate deck art show to
          benefit families of kids born with extraordinary medical conditions.
          We have raised over $100k throughout the years with the 2022 event
          benefiting seven families.
        </p>
        <p>
           This year's event is going to be EPIC - art
          auction, skate decks, live music, raffles, booths, swag, food and
          great beer!  SHRED always brings together community and friends for a fun afternoon
          to create an atmosphere of energy to help propel these families
          forward. 
        </p>
        <p>
         We cannot wait to see you there in 2023!
        </p>
      </div>
    </div>
  );
};

export default Hero;
