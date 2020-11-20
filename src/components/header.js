import React from "react";
import {LocalizedLink as Link} from "gatsby-theme-i18n"

import Logo from "./logo"

class Header extends React.Component  {

  render() {

      return(
        <header className={"site-header"}>
        <div className={"navbar"}>
          <Link to="/">
            <Logo/>
          </Link>
        </div>
      </header>
      )
      }
}

export default Header;