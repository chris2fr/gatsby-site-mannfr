import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import {
  useLocalization,
  MdxLink,
  LocalizedLink as Link,
} from "gatsby-theme-i18n";

import Layout from "../components/layout";
// import Header from "../components/header";
import PostHeader from "../components/post-header";

import "../css/single.css";
import "../css/utilities.css";
import "../css/basics.css";
import "../css/layout.css";
import "../css/tag.css";
import "../css/kg.css";
// import "../css/header.css";
// import "../css/burger.css";
// import "../css/widget.css";
import "../css/term.css";

// import "./tag.css
import "./post.css";
import "../css/post.css";
import "../css/grid.css";
import "../css/feed.css"
//import { isPropertySignature } from "typescript";

const components = {
  a: MdxLink,
};

function tagsForRender(tags) {
  var ret = [];
  if (!tags) return [];
  tags.forEach((tag) =>
    ret.push(ret.push({ name: tag, url: "/tags/" + tag, slug: tag }))
  );
  return ret;
}

export default ({ data, pageContext }) => {
  const { locale, config, defaultLang } = useLocalization();
  let title = data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.title;
  let description =
    data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.description;

  let imgSrc =
    data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.feature_image
      ? data.mdx.frontmatter.feature_image.publicURL
      : null;
  let imageFluid =
    data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.feature_image
      ? data.mdx.frontmatter.feature_image.childImageSharp.fluid
      : null;
  let tags = [];
  // if (
  //   data.mdx &&
  //   data.mdx.frontmatter &&
  //   data.mdx.frontmatter.tags &&
  //   data.mdx.frontmatter.tags.length > 0
  // ) {
  //   data.mdx.frontmatter.tags.forEach((tag) =>
  //     tags.push({ name: tag, url: "/tags/" + tag, slug: tag })
  //   );
  // }
  return (
    <Layout>
      <Helmet>
        <body className={"tag-template tag-digital"} />
      </Helmet>
      <section className={"term"}>
        <div className={"term-wrapper"}>
          <h1 className={"term-name"}>{title}</h1>
          <div className={"term-description"}>{description}</div>
        </div>
      </section>

      <div className={"post-feed"}>
        {data.allMdx.nodes.map((node) => (
          <>
            <article className={`post tag`}>
                
                <div className={"post-media"}>
                <div className={"u-placeholder same-height rectangle"}>
                  <PostHeader
                    tags={tagsForRender(node.frontmatter.tags)}
                    single={false}
                    fluid={
                      node.frontmatter.feature_image &&
                      node.frontmatter.feature_image.childImageSharp.fluid
                    }
                    title={node.frontmatter.title}
                    timeToRead={node.timeToRead}
                    created_at={node.frontmatter.created_at}
                    to={node.fields.slug}
                    className="post-image-link"
                    style={{}}
                  />
                </div>
                        </div>
                 
                
              <div className={"post-wrapper"}>
                <header className={"post-header"}>
                  <div className={"post-meta"}>
                    <span className={"post-meta-item post-meta-date"}>
                      <time datetime="2020-07-30">4 months ago</time>
                    </span>
                    <span className={"post-meta-item post-meta-length"}>
                      1 min read
                    </span>
                  </div>
                  <h2 className={"post-title"}>
                    <a
                      className={"post-title-link"}
                      href="/acp-amazon-echo-americanchurchinparis/"
                    >
                      Self-Contained Amazon Echo Show Mini-Video-Conference
                      Device
                    </a>
                  </h2>
                </header>{" "}
                <div className={"post-excerpt"}>
                  Self-Contained Amazon Echo Show Video Conference Device This
                  device can allow a distant participant or perhaps two into a
                  physical meeting. It is a Echo Show 8 set atop a record
                  turntable and
                </div>
                <footer className={"post-footer"}>
                  <div className={"post-author"}>
                    <a className={"post-author-link"} href={"/author/chris/"}>
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
                    </a>
                  </div>
                  <a
                    className={"read-more button-arrow-right"}
                    href="/acp-amazon-echo-americanchurchinparis/"
                  >
                    Read More
                    <i
                      className={"button-arrow-icon icon icon-arrow-right"}
                    ></i>
                  </a>
                </footer>
              </div> 
            </article>
          </>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
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
      body
      timeToRead
    }
    allMdx(filter: { frontmatter: { tags: { in: "digital" } } }) {
      nodes {
        fields {
          slug
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
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        body
        slug
        timeToRead
      }
    }
  }
`;
