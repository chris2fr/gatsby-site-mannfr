import React from "react";
import { graphql } from "gatsby";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import { useTranslation } from "react-i18next"
import Layout from "../components/layout";

import "./posts.css"
import "../css/screen.css"
import { visitNodes } from "typescript";

const PostsPage = ({ pageContext, data }) => {
  const { t } = useTranslation("translation");

  let postsByTags = {};
  let allTags = [];

  data.allMannTag.nodes.map(tag => {
    allTags.push(tag.fieldValue) 
    tag.tags.map(subTag => 
      {
        allTags.push(subTag);
      })
  }
  )

  data.postsByTag.group.map(group => {
    postsByTags[group.fieldValue] = [];
    group.nodes.map( post => {
      post.tags && post.tags.map( tagOfPost => {
        postsByTags[tagOfPost.uriSlug] && postsByTags[tagOfPost.uriSlug].push(post.id);
      })
    })
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
<thead>
<tr>
  <th width={Math.floor(100/(allTags.length + 1)) + "%"}></th>
{data.allMannTag.nodes.map( tag =>
<> 
  <th colSpan={tag.tags.length + 1} width={Math.floor((tag.tags.length + 1)*100/(allTags.length + 1))+"%"} className={"tag-" + tag.uriSlug}>{tag.uriSlug}</th>
  </>
)
}
</tr>
<tr style={{height:"140px"}}>
  <td width={Math.floor(100/(allTags.length + 1)) + "%"}></td>
{data.allMannTag.nodes.map( tag =>
<> 
  <th width={Math.floor(100/(allTags.length + 1)) + "%"}><div  style={{transform:"rotate(270deg)"}} className={"tag-" + tag.uriSlug}>{tag.uriSlug}</div></th>
  {tag.tags && tag.tags.map(subtag =>
  <>
  <td align="center" width={Math.floor(100/(allTags.length + 1)) + "%"}><div className={"tag-" + tag.uriSlug} style={{transform:"rotate(270deg)"}}>
    {subtag.uriSlug}
    </div></td>
  </>
  )}
</>
)
}
</tr>
</thead>
{data.groupedPosts.group.map(biPost =>
<>
<tr>
  <th colSpan={allTags.length + 1}>{biPost.fieldValue} <a href={biPost.edges[0].node.originalPath}>{biPost.edges[0].node.title && biPost.edges[0].node.title.substring(0,25)}</a> <i>{biPost.edges[1] && <a href={biPost.edges[1].node.originalPath}> {biPost.edges[1].node.title && biPost.edges[1].node.title.substring(0,25)}</a>}</i></th>
</tr>
{biPost.edges.map( post =>
  <tr>
  <th><a href={post.node.originalPath}>{post.node.realLocale}</a></th>
  {data.allMannTag.nodes.map(tag =>
<> 
  <th className={"tag-" + tag.uriSlug}>{postsByTags[tag.uriSlug] && postsByTags[tag.uriSlug].includes(post.node.id) && tag.uriSlug.substring(0,2)}</th>
  {tag.tags.map(subtag =>
  <td align="center" className={"tag-" + tag.uriSlug}>
    {postsByTags[subtag.uriSlug] && postsByTags[subtag.uriSlug].includes(post.node.id) && subtag.uriSlug.substring(0,2)}
  </td>
  )}
</>
)
}

</tr>
)}
</>
  )}
</table>
      

{/* 
<ul>
  {data.allMannTag.nodes.map(tag=> 
    <li key={tag.uriPath}>
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
</ul> */}
</Layout>
);
};

export default PostsPage;

export const postsPageQuery = graphql`
query PostsPageQuery($locale: String!) {
  allMannTag(filter: {type: {eq: "hometag"}, realLocale: {eq: "en"}}) {
    nodes {
      uriSlug
      tags {
        uriSlug
      }
    }
  }
  postsByTag:allMannPost {
    group(field: tags___uriSlug) {
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
  groupedPosts:allMannPost(sort: {fields: [originalPath, realLocale], order: [DESC, ASC]}) {
    group(field: originalPath) {
      fieldValue
      edges {
        node {
          id
          realLocale
          title
          tags {
            uriSlug
            tags {
              uriSlug
            }
          }
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