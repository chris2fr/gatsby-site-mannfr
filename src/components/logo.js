import React from "react";
// import {Img} from "gatsby-image"
import SiteConfig from "../../config/site-config"
import {LocalizedLink as Link} from "gatsby-theme-i18n"

class Logo extends React.Component  {

  render() {

    if (SiteConfig.logo) {
      return(
        <Link to="/"><img className={"logo-image"} src={SiteConfig.logo} alt={SiteConfig.title}/></Link>
      )
    } else {
      return(
        <Link to="/"><span className={"logo-text"}>{SiteConfig.title}</span></Link>
      )
    }

  }

}

export default Logo;