import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { about, aboutText, aboutImage } from "./about.module.css";
const About = ()=> {
  return (
    <div className={about}>
      <div className={aboutImage}>
        <StaticImage src={`../images/about.jpg`} alt='kid' />
      </div>
      <div className={aboutText}>
      <p>
        See the highlights below of the amazing SHRED'ers for 2022 and other
        families SHRED has helped. SHRED began as a humble skate event to
        benefit Gabe Ospina who was born with Spina Bifida. Despite being in a
        wheelchair, Gabe was determined to defy medical expectations and do
        everything possible to live one kick butt life! In 2011, Vic "The Chili
        Man" Werany and the Ospina's were neighbors. Vic learned of how the
        Ospina's struggled both financially and emotionally throughout
        navigating Gabe's complex medical needs, including two stem cell therapy
        treatments costing $48k+. Shortly thereafter, an idea was hatched from a
        13 year old who wanted to use skateboarding as a way to help his
        community. Vic got to work with the Ospina's to create the first SHRED
        event at a skatepark in Rockhill, NC. The event was a blast and a darn
        good time with "kids helping kids" and connections that they made
        through sport. In year two, Gabe's friend, Luke Rainwater who was also
        born with Spina Bifida, came out to a SHRED event. Luke was in his glory
        as some of the bigger skaters pushed him, in his wheelchair, up and down
        the ramps. After seeing that joy and Luke and Gabe's friendship, both
        Vic and the Ospina's agreed that benefiting as many families as possible
        with an annual event only made sense. SHRED is a 501(c)(3) registered
        organization with a 2022 goal of $40k and beyond!
      </p>
      </div>
    </div>
  );
};

export default About;
