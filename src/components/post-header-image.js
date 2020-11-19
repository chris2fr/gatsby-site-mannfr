import React from "react";

import Img from "gatsby-image";

import "../css/single.css";
import "../css/utilities.css";
// import "../css/header.css";
// import "../css/burger.css";
// import "../css/widget.css";
// import "../css/basics.css";
// import "../pages/index.css";

class PostHeaderImage extends React.Component {
  constructor(props) {
    super(props);
    this.imageFluid = props.imageFluid;
    this.alt = props.alt;
    this.className = props.className;
  }

  render() {
    if (this.imageFluid) {
      return (
        <>
        {/* <div id="jarallax-container-0" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;"><img class="post-image jarallax-img u-object-fit lazyautosizes lazyloaded" data-srcset="/content/images/size/w300/2020/11/svetlana_pensante.jpg 300w, /content/images/size/w750/2020/11/svetlana_pensante.jpg 750w, /content/images/size/w960/2020/11/svetlana_pensante.jpg 960w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Sounding Board" sizes="1321px" srcset="/content/images/size/w300/2020/11/svetlana_pensante.jpg 300w, /content/images/size/w750/2020/11/svetlana_pensante.jpg 750w, /content/images/size/w960/2020/11/svetlana_pensante.jpg 960w" style="object-fit: cover; object-position: 50% 50%; max-width: none; position: fixed; top: 0px; left: 0px; width: 1321px; height: 897.3px; overflow: hidden; pointer-events: none; margin-top: 24.85px; transform: translate3d(0px, -14.85px, 0px);"></div></div>
    </div> */}
        <Img fluid={this.imageFluid}
        alt={this.alt}
        className={this.className}
        objectFit="cover"
      objectPosition="50% 50%"
      />
        </>
      )
    }
  }

}

export default PostHeaderImage;