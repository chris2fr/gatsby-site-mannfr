import React from "react";
import {LocalizedLink as Link  } from "gatsby-theme-i18n";

import "../css/single.css";
import "../css/utilities.css";
import "../css/post.css";
// import "../css/header.css";
// import "../css/burger.css";
// import "../css/widget.css";
// import "../css/basics.css";
// import "../pages/index.css";

class PostHeaderTags extends React.Component {
  constructor(props) {
    super(props);
    this.tags = props.tags;
  }

  render() {
    if (this.tags) {
      return (
        <div className={"post-tags"}>
          {this.tags.map((tag) =>(
          <Link className={'post-tag post-tag-${tag.slug}'} to={tag.url} title={tag.name}>{tag.name}</Link>)
          )}
        </div>
      )
    }
  }

}

export default PostHeaderTags;