//import React from "react"
import React from 'react';
import {Link, graphql, StaticQuery} from "gatsby"
import Img from "gatsby-image"
//import Img from "gatsby-image/withIEPolyfill"

import "../css/screen.css"

export default function CategoryRoute({ data }) {
  return (
    <>
<Link to={"/"}>Mann.fr</Link>
<h1>Categrory</h1>
<p>Welcome to the category page.</p>

<StaticQuery
      query={graphql`
      {
        allMdx(
          filter: { frontmatter: { type: { eq: "tag" } } }
          sort: { order: ASC, fields: frontmatter___order }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              description
              feature_image {
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
          }
        }
      }
    `}
      render={data =>
        <>
          <h1>{data.allMdx.nodes[0].frontmatter.title}</h1>

{/* <div className={"mann-carousel-item"}>
<Link to={slug} style={{ display: "block" }}>
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
</>
      }
    />

{/* <Img
                  fluid={data.file.childImageSharp.fluid}
                  alt="Digital"
                /> */}



    </>
  )
}

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "home/peter-tablet.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `