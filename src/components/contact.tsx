
import * as React from "react";
import { contact} from "./contact.module.css";
const About = ()=> {
  return (
    <div className={contact}>
      <form
        method="post"
        action="https://getform.io/f/141bf3a4-174c-4cc2-95e5-e0952b1e308f"
      >
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </div>
  );
};

export default About;
