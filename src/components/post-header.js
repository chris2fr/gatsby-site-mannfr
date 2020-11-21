import React from "react";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import Img from "gatsby-image";

import PostHeaderTags from "../components/post-header-tags";

import "../css/single.css";
import "../css/utilities.css";
import "../css/post.css";
import tag from "../templates/tag";
// import "../css/header.css";
// import "../css/burger.css";
// import "../css/widget.css";
// import "../css/basics.css";
// import "../pages/index.css";

class PostHeader extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderTitle() {
    if (this.props.single || !this.props.to) {
      return <h1 className={"post-title"}>{this.props.title}</h1>;
    } else {
      return (
        <>
          <div className="post-title">
            <Link to={this.props.to} className={"post-title-link"}>
              {this.props.title}
            </Link>
          </div>
        </>
      );
    }
  }

  render() {
    // let tagsForRender = []
    // this.props.tags.forEach(tag =>
    //   tagsForRender.push({
    //     slug: "/" + tag,
    //     name: tag,
    //     url: "/" + tag
    //   })
    // )
    return (
      <>
              <div class="post-media">
        <div class="u-placeholder initialized" style={{ "z-index": "0" }}>
          {this.props.fluid && (
            <Img
              fluid={this.props.fluid}
              alt={this.props.alt}
              objectFit="cover"
              style={{ position: "absolute", minWidth: "100vw", height: "100%" }}
              className={this.props.className}
              notStyle={this.props.style}
            />
          )}
          <header class="post-header">
            <PostHeaderTags tags={this.props.tags} />
            {this.renderTitle()}
            <div class="post-meta"> 
            {this.props.created_at &&
              <span class="post-meta-item post-meta-date">
                {this.props.created_at}
              </span>
            }{this.props.timeToRead &&
              <span class="post-meta-item post-meta-length">
                {this.props.timeToRead} min reading
              </span>
            }
            </div>
            {this.props.featured && (
              <span class="post-meta-featured">
                <i class="icon icon-star"></i>
              </span>
            )}
            </header>
            </div>
            </div>
            {/*   <div class="post-tags">
                    <a class="post-tag post-tag-mann-fr" href="/tag/mann-fr/" title=" MANN.FR"> MANN.FR</a>
                    <a class="post-tag post-tag-human" href="/tag/human/" title=" Human"> Human</a>
            </div>
        <h1 class="post-title">Sounding Board</h1>
            <div class="post-meta">
        <span class="post-meta-item post-meta-date">
            <time datetime="2020-04-25">
                    Apr 25, 2020
            </time>
        </span>
        <span class="post-meta-item post-meta-length">1 min read</span>
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
}

export default PostHeader;
