import React from "react";
import Helmet from "react-helmet";
// import { LocalizedLink as Link } from "gatsby-theme-i18n";

import Logo from "./logo";
import Burger from "./burger";
import LangSwitch from "./langswitch";

import "../css/screen.css";
// import "../css/header.css"

const Header = ({ pageContext }) => {
  return (
    <header className={"site-header"}>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon.ico/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon.ico/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon.ico/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon.ico/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon.ico/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon.ico/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon.ico/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon.ico/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon.ico/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon.ico/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.ico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon.ico/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.ico/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon.ico/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </Helmet>
      <div className={"navbar"}>
        <Logo />
        <LangSwitch pageContext={pageContext} />
        <Burger pageContext={pageContext} />
      </div>
    </header>
  );
};

export default Header;
