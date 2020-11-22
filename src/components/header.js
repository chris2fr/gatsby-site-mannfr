import React from "react";
// import { LocalizedLink as Link } from "gatsby-theme-i18n";

import Logo from "./logo";
import Burger from "./burger";
import LangSwitch from "./langswitch"

import "../css/header.css"

const Header = ({pageContext}) => {
return (
      <header className={"site-header"}>
        <div className={"navbar"}>
          <Logo />
          <LangSwitch
          pageContext={pageContext}
          />
          <Burger
          pageContext={pageContext}
          />
        </div>
      </header>
    )
  }


export default Header;
