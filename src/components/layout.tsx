import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";
import NavBar from "./nav.tsx";
import {
  topRibbon,
  masthead,
  logo,
  tagline,
  container,
  heading,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <div className={topRibbon} />
      <div className={masthead}>
        <div className={logo}>
          <StaticImage src="../images/logo.png" alt="logo" />
        </div>
        <div className={tagline}>
          SKATERS HELPING REALIZE EXTRAORDINARY DREAMS
        </div>
      </div>
      <NavBar />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
