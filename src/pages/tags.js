// import React from "react";
import React from "react";
import { graphql } from "gatsby";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
// import { Trans } from '@lingui/macro'
import { useTranslation } from "react-i18next"

// import LayoutWithHeaderImage from "../components/layout-with-header-image";
import Layout from "../components/layout";

import "../css/screen.css"



const TagsPage = ({ pageContext, data }) => {

  const { t } = useTranslation("translation")


  return (
    <Layout
      title={t("Tags")}
      alt={t("Tags")}
      pageContext={pageContext}
      tags={[]}
      fluid={data.file && data.file.childImageSharp.fluid}
    >
      <h1>{t("All Tags")}</h1>

<ul>
  {data.allMdx.group.map(tag=> 
    <li key={tag.tag}>
      <Link to={"/tags/" + tag.tag}>{t(tag.tag)} ({tag.totalCount})</Link>
    </li>
  )
  }
</ul>
</Layout>
);
};

export default TagsPage;

export const tagsPageQuery = graphql`
query TagsPageQuery($locale: String!) {
  allMdx(filter: {fields: {locale: {eq: $locale}}}) {
    group(field: frontmatter___tags) {
      tag: fieldValue
      totalCount
    }
  }
  allMannTag(filter: {realLocale: {eq: $locale}, type: {eq: "hometag"}}) {
    nodes {
      id
      uriPath
      uriSlug
      realLocale
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
}
`;
