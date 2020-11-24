import React from "react";
import { graphql } from "gatsby";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import { useTranslation } from "react-i18next"

import Layout from "../components/layout";
import PostHeader from "../components/post-header";

import "../css/screen.css"
// import { Trans } from '@lingui/macro'

export default ({ pageContext, data }) => {

    //pageContext.path = "/404"
    const { t } = useTranslation("translation")
    return (
      <Layout pageContext={pageContext}>
        <article
          className="post tag-mann-fr tag-human single-post"
          style={{ width: "100vw" }}
        >
          <PostHeader
            fluid={data.file.childImageSharp.fluid}
            alt={"404"}
            title={"404"}
            to={"pageContext"}
            originalPath={"/404"}
            tags={[]}
            single={true}
            style={{ position: "absolute", width: "100vw", height: "100%" }}
          />
          <div className="post-content kg-canvas u-text-format">
            404
            <h1>{t("Lost in Hyperspace")}</h1>
            <p>{t("So sorry, but no content here now.")}</p>
            <p><Link to="/">{t("Return Home")}</Link></p> 
          </div>
        </article>
      </Layout>
    );

  }

export const query = graphql`
  query {
    file(
      relativePath: { eq: "404.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
