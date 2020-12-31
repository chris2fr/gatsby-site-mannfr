import React from "react";
import {LocalizedLink as Link  } from "gatsby-theme-i18n";
// import { Trans } from '@lingui/macro'


import "../css/screen.css"

// import "../css/single.css";
// import "../css/utilities.css";
// import "../css/post.css";
// // import "../css/header.css";
// // import "../css/burger.css";
// // import "../css/widget.css";
// // import "../css/basics.css";
// // import "../pages/index.css";

class PostHeaderTags extends React.Component {
  constructor(props) {
    super(props);
    this.tags = props.tags;
  }

  render() {
    if (this.tags) {
      return (
        <div className={"post-tags"}>
          {this.tags.map((tag, index) =>(
          <Link className={`post-tag post-tag-${tag.uriSlug}`} key={`tag-${index}`} to={tag.uriPath} title={tag.name}>#{tag.name}</Link>)
          )}
        </div>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

}

export default PostHeaderTags;