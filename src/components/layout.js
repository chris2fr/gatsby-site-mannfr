import React from "react";
// import { MDXProvider } from "@mdx-js/react";
import Header from "./header"
// import Helmet from "react-helmet"
// import { LocalizedLink as Link } from "gatsby-theme-i18n";

// import "../css/single.css";
import "../css/utilities.css";
import "../css/basics.css";
import "../css/layout.css";
import "../css/tag.css";
import "../css/kg.css";
import "../css/header.css";
import "../css/burger.css";
import "../css/widget.css";
import "../css/term.css";
import "../css/grid.css"
import "../css/normalize.css"

import "./layout.css"


const Layout = ({ children }) => {
  return (
    <>
      <div className="site">
        <Header />
        <div className={"site-content"}>
          <div className="content-area">
            <main className="site-main container">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
