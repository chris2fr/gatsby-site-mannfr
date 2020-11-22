import React from "react";
import { graphql } from "gatsby";
import { LocalizedLink as Link } from "gatsby-theme-i18n";

import Layout from "../components/layout";
import PostHeader from "../components/post-header";

export default class FourOhFour extends React.Component {
  render() {
    return (
      <Layout pageContext={this.props.pageContext}>
        <article
          className="post tag-mann-fr tag-human single-post"
          style={{ width: "100vw" }}
        >
          <PostHeader
            fluid={this.props.data.file.childImageSharp.fluid}
            alt={"404"}
            title={"404"}
            to={"/404"}
            originalPath={this.props.pageContext.originalPath}
            tags={[{ url: "/404", slug: "/404", name: "404" }]}
            single={true}
            style={{ position: "absolute", width: "100vw", height: "100%" }}
          />
          <div className="post-content kg-canvas u-text-format">
            <h1>Lost in Hyperspace</h1>
            <p>So sorry, but no content here now.</p>
            <p><Link to="/">Return Home</Link></p>
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
