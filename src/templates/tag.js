import * as React from "react";
import { graphql, Link } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";

import "../css/tag.css";
import "./tag.css";

export default ({ data, pageContext }) => {
  let title =
    (data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.title) ||
    "Missing Title";
  let description =
    (data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.description) ||
    "";
  let slug = data.mdx && data.mdx.fields && data.mdx.fields.slug;
  let imgSrc =
    data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.feature_image
      ? data.mdx.frontmatter.feature_image.publicURL
      : null;

  console.log(data.mdx);

  return (
    <>
      <div className={"mann-carousel-item"}>
        <Link to={slug} style={{ display: "block" }}>
          <div className={"tag"}>
            <Img
              className={"tag-img mann-carousel-img"}
              fluid={data.mdx.frontmatter.feature_image.childImageSharp.fluid}
              alt={title}
            />
            <div className={"tag-content"}>
              <h2 className={"tag-name"}>{title}</h2>
              <div className={"tag-description"}>{description}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};


