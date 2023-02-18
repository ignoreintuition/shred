import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { cardContainer, cardImage, cardHeader, cardLink } from "./cards.module.css";
const Cards = () => {
  return (
    <div>
      <div className={cardHeader}> Other Stuff </div>
      <div className={cardContainer}>
        <div className={cardImage}>
          <StaticImage
            width={200}
            height={150}
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
            src={`../images/about.jpg`}
            alt="kid"
          />
          <div className={cardLink}> Upcoming Event </div>
        </div>
        <div className={cardImage}>
          <StaticImage
            width={200}
            height={150}
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
            src={`../images/hero.png`}
            alt="kid"
          />
          <div className={cardLink}> Upcoming Event </div>
        </div>
        <div className={cardImage}>
          <StaticImage
            width={200}
            height={150}
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
            src={`../images/donate.png`}
            alt="kid"
          />
          <div className={cardLink}> Upcoming Event </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
