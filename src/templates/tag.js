import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import {
  // useLocalization,
  MdxLink,
  LocalizedLink as Link,
} from "gatsby-theme-i18n";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
// import { Trans } from "@lingui/macro";

import { useTranslation } from "react-i18next"

import Layout from "../components/layout";

import "../css/screen.css";

// import "../css/single.css";
// import "../css/utilities.css";
// import "../css/basics.css";
// import "../css/layout.css";
// import "../css/tag.css";
// import "../css/kg.css";
// // import "../css/header.css";
// // import "../css/burger.css";
// // import "../css/widget.css";
// import "../css/term.css";

// // import "./tag.css";
// // import "./post.css";
// import "../css/post.css";
// import "../css/grid.css";
// import "../css/feed.css";
//import { isPropertySignature } from "typescript";

const components = {
  a: MdxLink,
};

// function tagsForRender(tags) {
//   var ret = [];
//   if (!tags) return [];
//   tags.forEach((tag) =>
//     ret.push({ name: tag, uriPath: "/tags/" + tag, uriSlug: tag })
//   );
//   return ret;
// }

export default ({ data, pageContext }) => {
  const { t } = useTranslation("translation")
  // const { locale, config, defaultLang } = useLocalization();
  let title = data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.title;
  let description =
    data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.description;

  // let imgSrc =
  //   data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.feature_image
  //     ? data.mdx.frontmatter.feature_image.publicURL
  //     : null;
  // let imageFluid =
  //   data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.feature_image
  //     ? data.mdx.frontmatter.feature_image.childImageSharp.fluid
  //     : null;
  // let tags = [];
  return (
    <Layout pageContext={pageContext}>
      <Helmet>
        <body className={"tag-template tag-digital"} />
      </Helmet>
      <section className={"term"}>
        <div className={"term-wrapper"}>
          <h1 className={"term-name"}>{title}</h1>
          <div className={"term-description"}>{description}</div>
        </div>
      </section>

      <React.Fragment>
        <MDXProvider components={components}>
          <MDXRenderer components={components}>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </React.Fragment>

      <div className={"post-feed"}>
        {data.allMdx.nodes.map((node, index) => (
          <article className={`post tag`} key={`tag-post-${index}`}>
            <div className={"post-media"}>
              <div
                className={"u-placeholder same-height rectangle"}
                style={{ overflow: "hidden" }}
              >
                <Link className={"post-image-link"} 
                to={node.fields.uriPath}>
                  {node.frontmatter.feature_image && (
                    <Img
                      fluid={
                        node.frontmatter.feature_image &&
                        node.frontmatter.feature_image.childImageSharp.fluid
                      }
                      alt={node.frontmatter.title}
                      className={"post-image-link"}
                      overflow={"hidden"}
                    />
                  )}
                </Link>
              </div>
            </div>

            <div className={"post-wrapper"}>
              <header className={"post-header"}>
                <div className={"post-meta"}>
                  <span className={"post-meta-item post-meta-date"}>
                    <time dateTime="{node.frontmatter.created_at}">
                      {node.frontmatter.created_at}
                    </time>
                  </span>
                  <span className={"post-meta-item post-meta-length"}>
                    {node.timeToRead} <trans>min read</trans>
                  </span>
                  {/* <span className={"post-meta-item"}>
                    <PostHeaderTags
                        tags={tagsForRender(node.frontmatter.tags)}
                      />
                      </span> */}
                </div>
                <h2 className={"post-title"}>
                  <Link
                    className={"post-title-link"}
                    to={node.fields.uriPath}
                  >
                    {node.frontmatter.title}
                  </Link>
                </h2>
              </header>
              <div className={"post-excerpt"}>
                {node.frontmatter.description || node.excerpt}
              </div>
              <footer className={"post-footer"}>
                <div className={"post-author"}>
                  <Link className={"post-author-link"} to={"/author/chris"}>
                    <img
                      className={"post-author-image lazyautosizes lazyloaded"}
                      data-src={
                        "//www.gravatar.com/avatar/2b6de4ce6e6beeab606581305e0edebd?s=250&amp;d=mm&amp;r=x"
                      }
                      src={
                        "//www.gravatar.com/avatar/2b6de4ce6e6beeab606581305e0edebd?s=250&amp;d=mm&amp;r=x"
                      }
                      data-sizes="auto"
                      alt="Chris Mann"
                      sizes="30px"
                    />
                  </Link>
                </div>
                <Link
                  className={"read-more button-arrow-right"}
                  to={node.fields.uriPath}
                >
                  {t("Read More")}
                  <i className={"button-arrow-icon icon icon-arrow-right"}></i>
                </Link>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($originalPath: String!, $uriSlug: String!, $realLocale: String!) {
    mdx(fields: { realLocale: { eq: $realLocale }, originalPath: { eq: $originalPath} }) {
      body
      timeToRead
      excerpt
      frontmatter {
        slug
        title
        tags
        created_at(formatString: "YYYY-MM-DD")
        feature_image {
          publicURL
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(quality: 80, maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMdx(
      filter: { frontmatter: { tags: { eq: $uriSlug }, type: { ne: "tag" } }, fields: { realLocale: { eq: $realLocale } } }
      sort: { fields: frontmatter___created_at, order: DESC }
    ) {
      nodes {
        body
        excerpt(pruneLength: 400)
        timeToRead
        fields {
          uriPath
        }
        frontmatter {
          slug
          title
          tags
          created_at(formatString: "YYYY-MM-DD")
          description
          feature_image {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
