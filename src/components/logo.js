import React from "react";
import Img from "gatsby-image";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import { StaticQuery, graphql } from "gatsby";
// import { Trans } from '@lingui/macro'
import { useTranslation } from "react-i18next"


import "../css/screen.css"

export default function Logo() {
  const { t } = useTranslation("translation")
  return (
    <>
    <StaticQuery
      query={graphql`
        query LogoQuery {
          file(
            sourceInstanceName: { eq: "images" }
            relativePath: { eq: "logo.png" }
          ) {
            childImageSharp {
              fixed (height: 75) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data =>
        <Link to="/" className={"logo"} style={{display:"flex"}}>
        {data.file && 
            
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt={data.site.siteMetadata.title}
              />
      }{data.file &&
            <span className={"logo-text"}>
              {t("tagline")}
            </span>
          
          }
          </Link>
      }
    />
    </>
  )
}
