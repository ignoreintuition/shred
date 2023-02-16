import * as React from "react";
import { contact, flexLabel, flexOuter, flexText } from "./contact.module.css";
const About = () => {
  return (
    <div className={contact}>
      <form
        method="post"
        action="https://getform.io/f/141bf3a4-174c-4cc2-95e5-e0952b1e308f"
      >
        <div>
          <div className={flexOuter}>
            <div className={flexLabel}>
              <label> Name </label>
            </div>
            <div className={flexText}>
              <input type="text" name="name" id="name" />
            </div>
          </div>
          <div className={flexOuter}>
            <div className={flexLabel}>
              <label > Email </label>
            </div>
            <div className={flexText}>
              <input
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className={flexOuter}>
            <div className={flexLabel}>
              <label > Subject </label>
            </div>
            <div className={flexText}>
              <input
                type="text"
                name="subject"
                id="subject"
              />
            </div>
          </div>
          <div className={flexOuter}>
            <div className={flexLabel}>
              <label > Message </label>
            </div>
            <div className={flexText}>
              <textarea
                name="message"
                id="message"
                rows="5"
              />
            </div>
          </div>
          <div className={flexOuter}>
            <button type="submit">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
