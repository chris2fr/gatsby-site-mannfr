import React from "react";
import { graphql } from "gatsby";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import { useTranslation } from "react-i18next"
import Layout from "../components/layout";

import "./posts.css"
import "../css/screen.css"

const PostsPage = ({ pageContext, data }) => {
  const { t } = useTranslation("translation");

  let postsByTags = {};

  data.allMannPost.group.map(tag => {
    postsByTags[tag.fieldValue] = tag.nodes;
  });

  return (
    <Layout
      title={t("Posts")}
      alt={t("Posts")}
      pageContext={pageContext}
      tags={[]}
      fluid={data.file && data.file.childImageSharp.fluid}
    >
      <h1>{t("All Posts")}</h1>
<table className="allPosts" border="1">
<tr>
  <th>Post</th>
{data.allMannTag.nodes.map(tag=>
<> 
  <th>{tag.uriSlug}</th>
  {tag.tags.map(subtag =>
  <th>
    {subtag.uriSlug}
  </th>
  )}
</>
)
}
</tr>
{data.justPosts.nodes.map(post =>
<>
<tr>
  <th style={{whiteSpace: "pre-wrap"}}><Link to={post.originalPath}>{post.mdx.frontmatter.title}<br/><small>{post.uriPath}</small></Link></th>
  {data.allMannTag.nodes.map(tag=>
<> 
  <td>{post.mdx.frontmatter.tags && post.mdx.frontmatter.tags.includes(tag.uriSlug) && tag.uriSlug}</td>
  {tag.tags.map(subtag =>
  <td>
    {post.mdx.frontmatter.tags && post.mdx.frontmatter.tags.includes(subtag.uriSlug) && subtag.uriSlug}
  </td>
  )}
</>
)
}

</tr>
</>
  )}
</table>
      


<ul>
  {data.allMannTag.nodes.map(tag=> 
    <li key={tag.uriSlug}>
      <Link to={"/tags/" + tag.uriSlug}>#{t(tag.uriSlug)}</Link>
      <ul>
        {postsByTags.hasOwnProperty(tag.uriPath) && postsByTags[tag.uriPath].map(post => 
        <>
          <li>
              {post.uriPath}
          </li>
        </>
        )
        }
        {tag.tags && tag.tags.map(subtag =>
        <>
        <li>#{subtag.uriSlug}
          <ul>
          {postsByTags.hasOwnProperty(subtag.uriPath) && postsByTags[subtag.uriPath].map(post => 
          <>
            <li>
              {post.uriPath}
            </li>      
          </>
          )
          }
          </ul>
        </li>
        </>
        )}
      </ul>
    </li>
  )
  }
</ul>
</Layout>
);
};

export default PostsPage;

export const postsPageQuery = graphql`
query PostsPageQuery($locale: String!) {
  allMannTag(filter: {type: {eq: "hometag"}, realLocale: {eq: $locale}}) {
    nodes {
      hrefLang
      uriPath
      uriSlug
      id
      mdx {
        frontmatter {
          title
        }
      }
      tags {
        id
        uriPath
        uriSlug
        mdx {
          frontmatter {
            title
          }
        }
      }
    }
  }
  allMannPost(filter: {realLocale: {eq: $locale}}) {
    group(field: tags___id) {
      fieldValue
      totalCount
      nodes {
        id
        uriSlug
        uriPath
        type
        realLocale
        tags {
          uriSlug
          uriPath
          type
        }
        mdx {
          excerpt
          slug
          id
          timeToRead
        }
      }
    }
  }
  justPosts:allMannPost(filter: {realLocale: {eq: $locale}}) {
    nodes {
        id
        uriSlug
        uriPath
        originalPath
        type
        realLocale
        tags {
          uriSlug
          uriPath
          type
          mdx {
            frontmatter {
              title
            }
          }
        }
        mdx {
          excerpt
          slug
          id
          timeToRead
          frontmatter {
            title
            tags
          }
          fields {
            originalPath
          }
        }
      }
  }
}
`;

// nodes {
//   id
//   uriPath
//   uriSlug
//   realLocale
//   tags {
//     id
//     uriPath
//     uriSlug
//     mdx {
//       frontmatter {
//         title
//       }
//     }
//   }
// }