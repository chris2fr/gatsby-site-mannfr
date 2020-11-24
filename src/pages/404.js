import React from "react";
import { graphql } from "gatsby";
// import { LocalizedLink as Link } from "gatsby-theme-i18n";

import Layout from "../components/layout";
import PostHeader from "../components/post-header";

import "../css/screen.css"
// import { Trans } from '@lingui/macro'

export default class FourOhFour extends React.Component {
  render() {
    let pageContext = this.props.pageContext;
    pageContext.path = "/404"
    return (
      <Layout pageContext={pageContext}>
        <article
          className="post tag-mann-fr tag-human single-post"
          style={{ width: "100vw" }}
        >
          <PostHeader
            fluid={this.props.data.file.childImageSharp.fluid}
            alt={"404"}
            title={"404"}
            to={"/404"}
            originalPath={"/404"}
            tags={[]}
            single={true}
            style={{ position: "absolute", width: "100vw", height: "100%" }}
          />
          <div className="post-content kg-canvas u-text-format">
            404
            {/* <h1><Trans>Lost in Hyperspace</Trans></h1>
            <p><Trans>So sorry, but no content here now.</Trans></p>
            <p><Link to="/"><Trans>Return Home</Trans></Link></p> */}
          </div>
        </article>
      </Layout>
    );
  }
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
