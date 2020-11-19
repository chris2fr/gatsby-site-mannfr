import React from "react";
import { LocalizedLink as Link } from "gatsby-theme-i18n";

import PostHeaderImage from "../components/post-header-image";
import PostHeaderTags from "../components/post-header-tags";

import "../css/single.css";
import "../css/utilities.css";
import "../css/post.css";
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
    if (this.props.single) {
      return <h1 className={"post-title"}>{this.props.title}</h1>;
    } else {
      return (
        <div className="post-title">
          <Link className={"post-title-link"}>{this.props.title}</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <header class="post-header">
          <PostHeaderTags tags={this.props.tags} />
          {this.renderTitle()}
          <div class="post-meta">
            <span class="post-meta-item post-meta-date">
              {this.props.created_at}
            </span>
            <span class="post-meta-item post-meta-length">
              {this.props.timeToRead} min reading
            </span>
          </div>
          {this.props.featured && (
            <span class="post-meta-featured">
              <i class="icon icon-star"></i>
            </span>
          )}
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
        </header>

        {/* <div className="post-header"> */}

        {/* </div> */}
      </>
    );
  }
}

export default PostHeader;
