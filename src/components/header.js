import React from "react";
import { LocalizedLink as Link } from "gatsby-theme-i18n";

import Logo from "./logo";
import Burger from "./burger";

import "../css/header.css"

class Header extends React.Component {
  render() {
    return (
      <header className={"site-header"}>
        <div className={"navbar"}>
          <Link to="/">
            <Logo />
          </Link>
          <Burger />
        </div>
      </header>
    );
  }
}

export default Header;
