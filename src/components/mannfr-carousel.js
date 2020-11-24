import React from "react";
import Carousel from "react-elastic-carousel";
import { StaticQuery, graphql } from "gatsby";
// import { useLocalization, LocalesList, LocalizedLink as Link  } from "gatsby-theme-i18n";
import { LocalizedLink as Link  } from "gatsby-theme-i18n";
// import { Trans } from '@lingui/macro'


import Img from "gatsby-image";

import "../css/screen.css"

import "./mannfr-carousel.css";

// import "../css/tag.css";
// import "../css/utilities.css";
// // import "../css/header.css";
// // import "../css/burger.css";
// // import "../css/widget.css";
// // import "../css/basics.css";
// // import "../pages/index.css";

class MannfrCarousel extends React.Component {
  // constructor(props) {
  //   // super({ children, ...props });
  //   super(props);
  // }

  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 650, itemsToShow: 2 },
      { width: 1150, itemsToShow: 3 },
      { width: 1500, itemsToShow: 4 },
      { width: 1950, itemsToShow: 5 },
      { width: 2200, itemsToShow: 6 },
    ];
    return (
      <>
        <StaticQuery
          query={graphql`
            {
              allMdx(
                filter: { frontmatter: { type: { eq: "tag" } } }
                sort: { order: ASC, fields: frontmatter___order }
              ) {
                nodes {
                  fields {
                    uriPath
                  }
                  frontmatter {
                    title
                    description
                    visibility
                    feature_image {
                      childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fluid(quality:80, maxWidth:2000) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  body
                }
              }
            }
          `}
          render={(data) => (
            <Carousel
              breakPoints={breakPoints}
              pagination={true}
              className="mann-carousel"
              enableMouseSwipe={true}
              focusOnSelect={true}
              renderArrow={({ type, onClick, disabled, ...rest }) => (
                <button
                  className={
                    "rec rec-arrow rec rec-arrow-" +
                    (type === "NEXT" ? "right" : "left")
                  }
                  onClick={onClick}
                  disabled={disabled}
                  {...rest}
                >
                  {type}
                </button>
              )}
            >
              {data.allMdx.nodes.map((node, index) => (
                <div className={"mann-carousel-item"} key={`tag-cover-${index}`}>
                  <Link to={node.fields.uriPath + "/"} style={{ display: "block" }} draggable={false}>
                    <div className={"tag"} draggable={false}>
                      <Img
                        className={"tag-img mann-carousel-img"}
                        fluid={
                          node.frontmatter.feature_image &&
                          node.frontmatter.feature_image.childImageSharp.fluid
                        }
                        alt={node.frontmatter.title}
                        draggable={false}
                        key={`tag-cover-image-${index}`}
                      />
                      <div className={"tag-content"}>
                        <h2 className={"tag-name"}>{node.frontmatter.title}</h2>
                        <div className={"tag-description"}>
                          {node.frontmatter.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Carousel>
          )}
        />

        {/* <div className={"mann-carousel-item"}>
<Link to={uriPath} style={{ display: "block" }}>
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
</div> */}

        {/* 
          <div key="slide-digital" className={"mann-carousel-item"}>
            <Link to="/tag/digital/" style={{ display: "block" }}>
              <div className={"tag"}>
                <img
                  className={"tag-img mann-carousel-img"}
                  src={"/images/peter-tablet.png"}
                  alt="Digital"
                />
                <div className={"tag-content"}>
                  <h2 className={"tag-name"}>Digital</h2>
                  <div className={"tag-description"}>
                    ou work in the heart of the cyber infrastructure. You peddle
                    the bicycle that powers your company and the work of your
                    clients. MANN.FR can help!
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div
            key="slide-human"
            className={"mann-carousel-item"}
            onMouseEnter={this.handleItemHover}
          >
            <Link className={"a-block"} to="/tag/human/">
              <div className={"tag"}>
                <Img
                  className={"tag-img mann-carousel-img"}
                  src="/images/dancing-king.jpg"
                  alt="Human"
                />

                <div className={"tag-content"}>
                  <h2 className={"tag-name"}> Human</h2>
                  <div className={"tag-description"}>
                    You work and live in a structure. You cooperate, collaborate
                    and create. MANN.FR can help you do so with sereine power.
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div key="slide-orgs" className={"mann-carousel-item"}>
            <Link className={"a-block"} to="/tag/orgs/">
              <div className={"tag"}>
                <Img
                  className={"tag-img mann-carousel-img"}
                  src="/images/bees-465x550.jpeg"
                  alt="Organization"
                />
                <div className={"tag-content"}>
                  <h2 className={"tag-name"}> Organization</h2>
                  <div className={"tag-description"}>
                    Your are an organization striving for inclusion because it
                    makes you more robust. MANN.FR will innovate with you,
                    invent and create, making those stalled projects move
                    forward kindly.
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div key="slide-human-aadhd" className={"mann-carousel-item "}>
            <Link className={"a-block"} to="/tag/human-aadhd/">
              <div className={"tag"}>
                <Img
                  className={"tag-img mann-carousel-img"}
                  src="/mann-fr_files/tnoc-7432.jpg"
                  alt="Human / Adult-ADHD"
                />
                <div className={"tag-content"}>
                  <h2 className={"tag-name"}>Human / Adult-ADHD</h2>
                  <div className={"tag-description"}>
                    You have Adult ADHD and with to thrive fully as you
                    compensating for this difference that can be handicap.
                    MANN.FR can address the specifics and move beyond this part
                    of you.
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div key="slide-photo" className={"mann-carousel-item"}>
            <Link className={"a-block"} to="/tag/photo/">
              <div className={"tag"}>
                <Img
                  className={"tag-img mann-carousel-img"}
                  src="/mann-fr_files/Chris_Mann_Photo-65-e1567510883586-1.jpg"
                  alt="Photo"
                />
                <div className={"tag-content"}>
                  <h2 className={"tag-name"}>Photo</h2>
                  <div className={"tag-description"}>
                    You are a photographer or a consumer of photography. MANN.FR
                    federates photographers, sets up common photographic events
                    and shares resources.
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div key="slide-mann-fr" className={"mann-carousel-item"}>
            <Link className={"a-block"} to="/tag/mann-fr/">
              <div className={"tag"}>
                <Img
                  className={"tag-img mann-carousel-img"}
                  src="/mann-fr_files/boule-1.png"
                  alt=" MANN.FR"
                />
                <div className={"tag-content"}>
                  <h2 className={"tag-name"}> MANN.FR</h2>
                  <div className={"tag-description"}>
                    MANN.FR is a business, my business as Chris Mann. You may
                    learn more about this business and associated products and
                    services useful to you.
                  </div>
                </div>
              </div>
            </Link>
          </div> 
        </Carousel>
      */}
      </>
    );
  }
}

export default MannfrCarousel;
