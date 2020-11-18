import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
//import Img from "gatsby-image"


export default ({ data, pageContext }) => {
  let title = data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.title;
  let imgSrc = (data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.feature_image)? data.mdx.frontmatter.feature_image.publicURL:null;
  return (
    <>
      <h1>{title}</h1>
      {imgSrc &&
      <img src={imgSrc}
      alt={title}/>
      }
      <div>
        {data.mdx ? (
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        ) : (
          <div>This page hasn't been translated yet</div>
        )}
      </div>
      <h1>Context</h1>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(
      fields: { slug: { eq: $slug } }  
    ) {
      frontmatter {
        slug
        title
        feature_image {
          publicURL
        }
      }
      body
    }
  }
`
