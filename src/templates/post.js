import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
// import Img from "gatsby-image";
// import { Trans } from '@lingui/macro'
import { useTranslation } from "react-i18next"

import Layout from "../components/layout";
// import Header from "../components/header";
import PostHeader from "../components/post-header";

import "../css/screen.css"

import "./post.css"

import { MdxLink } from "gatsby-theme-i18n";
//import { isPropertySignature } from "typescript";

const components = {
  a: MdxLink,
};

export default ({ data, pageContext }) => {
  const { t } = useTranslation("translation")
  // const { locale, config, defaultLang } = useLocalization();
  let title = data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.title;
  let imageFluid =
    data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.feature_image
      ? data.mdx.frontmatter.feature_image.childImageSharp.fluid
      : null;
  let tagsForRender = [];
  if (
    data.mdx &&
    data.mdx.frontmatter &&
    data.mdx.frontmatter.tags &&
    data.mdx.frontmatter.tags.length > 0
  ) {
    data.mdx.frontmatter.tags.forEach((tag) =>
    tagsForRender.push({ name: tag, uriPath: "/tags/" + tag, uriSlug: tag })
    );
  }
  pageContext.translations = []
  let langs = {"en":"en","fr":"fr","enFR":"en-FR"} 
  Object.keys(langs).map(key => {
    console.log(key, data[key]);
    data[key] && pageContext.translations.push(langs[key])})

  return (
    <Layout pageContext={pageContext}>
       {/* originalPath {pageContext.originalPath} locale {pageContext.locale} uriPath {pageContext.uriPath}   */}
        <article class="post tag-mann-fr tag-human single-post">
          <PostHeader
            tags={tagsForRender}
            single={true}
            fluid={imageFluid}
            title={title}
            pageContext={pageContext}
            timeToRead={data.mdx && data.mdx.timeToRead}
            created_at={data.mdx && data.mdx.frontmatter.created_at}
            style={{ position: "absolute", width: "100vw", height: "100%" }}
          /> 
        {/* post-image lazyload jarallax-img u-object-fit */}
{/* <div id="jarallax-container-0" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; zIndex: -100;"><img class="post-image jarallax-img u-object-fit lazyautosizes lazyloaded" data-srcset="/content/images/size/w300/2020/11/svetlana_pensante.jpg 300w, /content/images/size/w750/2020/11/svetlana_pensante.jpg 750w, /content/images/size/w960/2020/11/svetlana_pensante.jpg 960w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Sounding Board" sizes="1321px" srcset="/content/images/size/w300/2020/11/svetlana_pensante.jpg 300w, /content/images/size/w750/2020/11/svetlana_pensante.jpg 750w, /content/images/size/w960/2020/11/svetlana_pensante.jpg 960w" style="object-fit: cover; object-position: 50% 50%; max-width: none; position: fixed; top: 0px; left: 0px; width: 1321px; height: 897.3px; overflow: hidden; pointer-events: none; margin-top: 24.85px; transform: translate3d(0px, -14.85px, 0px);"></div></div>
    </div> */}
                <div class="post-content kg-canvas u-text-format">
                {data.mdx ? (
                  <>
              <React.Fragment>
                <MDXProvider components={components}>
                  <MDXRenderer components={components}>
                    {data.mdx.body}
                  </MDXRenderer>
                </MDXProvider>
              </React.Fragment>
                  </>
            ) : (
              <div>{t("This page hasn't been translated yet")}</div>
            )}
                    {/* <p>I was able to help friends prepare their CAPES and AGREGATION oral presentations with success, I was able to help a Director of a multi-national non-profit present in English at an international conference in Japan with success. My talent is listening to your presentation and feed back to you what I hear such that you better your way of expressing yourself.</p><p>This works very well for English identity seeking. When French speakers express themselves in English, they sometimes forget that language is also a tool for conveying identity. For them, English speaking is a handicap. I help francophones apprehend their handicap in this sense.</p><p>This works well also for cross-cultural collaborations. In seeking to work with teams from other countries, it is important to understand how others may apprehend you requests or work fulfillment.</p> */}
                </div>
                <div class="share container medium">
    {/* <a class="share-item share-facebook" href="https://www.facebook.com/sharer.php?u=https://en.mann.fr/presentation-and-expression-feedback/" target="_blank">
        <i class="icon icon-facebook"></i>
        <span class="share-label">Share</span>
    </a>
    <a class="share-item share-twitter" href="https://twitter.com/intent/tweet?url=https://en.mann.fr/presentation-and-expression-feedback/&amp;text=Sounding%20Board" target="_blank">
        <i class="icon icon-twitter"></i>
        <span class="share-label">Tweet</span>
    </a>
    <a class="share-item share-pinterest" href="https://pinterest.com/pin/create/button/?url=https://en.mann.fr/presentation-and-expression-feedback/&amp;media=/content/images/2020/11/svetlana_pensante.jpg&amp;description=Sounding%20Board" target="_blank">
        <i class="icon icon-pinterest"></i>
        <span class="share-label">Pin</span>
    </a> */}

    </div>
    </article>
          {/* </article>

          <hr />
          <h1>Context</h1>
          <pre>{JSON.stringify(pageContext, null, 2)}</pre>
        </main>
      </div>
    </div>
    </div> */}
    </Layout>
  );
};

export const query = graphql`
  query LocalePost($uriPath: String!, $realLocale: String!) {
    mdx(fields: { realLocale: { eq: $realLocale }, uriPath: { eq: $uriPath} }) {
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
            fluid(quality:80, maxWidth:2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        uriPath
      }
      body
      timeToRead
    }
    fr:mdx(fields: { uriPath: { eq: $uriPath }, realLocale: { eq: "fr"} }) {
      frontmatter {
        title
      }
    }
    en:mdx(fields: { uriPath: { eq: $uriPath }, realLocale: { eq: "en"} }) {
      frontmatter {
        title
      }
    }
    enFR:mdx(fields: { uriPath: { eq: $uriPath }, realLocale: { eq: "en-FR"} }) {
      frontmatter {
        title
      }
    }
  }
`;
