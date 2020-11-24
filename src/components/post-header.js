import React from "react";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import Img from "gatsby-image";
// import { Trans } from '@lingui/macro'


import PostHeaderTags from "../components/post-header-tags";

import "../css/screen.css"

// import "../css/single.css";
// import "../css/utilities.css";
// import "../css/post.css";
// import tag from "../templates/tag";
// // import "../css/header.css";
// // import "../css/burger.css";
// // import "../css/widget.css";
// // import "../css/basics.css";
// // import "../pages/index.css";



  const PostHeader = ({ children, pageContext, alt, fluid, to, className, tags, created_at, timeToRead, featured, single, title, ...props }) => {
    const renderTitle = (single, to, title, context) => {
      if (single || !to) {
        return <h1 className={"post-title"}>{title}</h1>;
      } else {
        return (
          <>
            <div className="post-title">
              <Link to={to} className={"post-title-link"}>
                {title}
              </Link> 
            </div>
          </>
        );
      }
    }

    // let tagsForRender = []
    // this.props.tags.forEach(tag =>
    //   tagsForRender.push({
    //     uriPath: "/" + tag,
    //     name: tag,
    //     url: "/" + tag
    //   })
    // )
    return (
      <>
        <div className="post-media">
          <div className="u-placeholder initialized" style={{ zIndex: "0" }}>
            {fluid && (
              <Img
                fluid={fluid}
                alt={alt}
                objectFit="cover"
                style={{
                  position: "absolute",
                  minWidth: "100vw",
                  height: "100%",
                }}
                className={className}
              />
            )}
            <header className="post-header">
              <PostHeaderTags tags={tags} />
              {renderTitle(single, to, title, pageContext)}
              <div className="post-meta">
                {created_at && (
                  <span className="post-meta-item post-meta-date">
                    {created_at}
                  </span>
                )}
                {timeToRead && (
                  <span className="post-meta-item post-meta-length">
                    {timeToRead} min reading
                  </span>
                )}
              </div>
              {featured && (
                <span className="post-meta-featured">
                  <i className="icon icon-star"></i>
                </span>
              )}
            </header>
          </div>
        </div>
        {/*   <div className="post-tags">
                    <a className="post-tag post-tag-mann-fr" href="/tag/mann-fr/" title=" MANN.FR"> MANN.FR</a>
                    <a className="post-tag post-tag-human" href="/tag/human/" title=" Human"> Human</a>
            </div>
        <h1 className="post-title">Sounding Board</h1>
            <div className="post-meta">
        <span className="post-meta-item post-meta-date">
            <time datetime="2020-04-25">
                    Apr 25, 2020
            </time>
        </span>
        <span className="post-meta-item post-meta-length">1 min read</span>
    </div> */}
        {/* <PostHeaderImage
          imageFluid={this.props.imageFluid}
          alt={this.props.title}
        /> */}
        {/* className={"post-image lazyload jarallax-img u-object-fit"} */}

        {/* <div className="post-header"> */}

        {/* </div> */}
      </>
    );
  }

export default PostHeader;
