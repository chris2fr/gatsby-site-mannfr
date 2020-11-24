import React from "react";
import Layout from "./layout";
import PostHeader from "./post-header";
// import { StaticQuery, graphql } from "gatsby";
// import { Trans } from '@lingui/macro'


import "../css/screen.css"

const LayoutWithHeaderImage = ({
  children,
  pageContext,
  alt,
  data,
  title,
  fluid,
  tags,
  pathname,
  ...props
}) => {
  if (!tags) {
    tags = [];
  }
  return (
        <Layout pageContext={pageContext}>
          <article
            className="post tag-mann-fr tag-human single-post"
            style={{ width: "100vw" }}
          >
            <PostHeader
              fluid={
                fluid
              }
              alt={alt}
              title={title}
              pageContext={pageContext}
              tags={tags}
              single={true}
              style={{ position: "absolute", width: "100vw", height: "100%" }}
            />
            <div className="post-content kg-canvas u-text-format">
                            {children}
            </div>
          </article>
        </Layout>
  );
};

export default LayoutWithHeaderImage;
