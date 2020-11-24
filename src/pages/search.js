// import React from "react";
import React, { useState } from "react";
import { graphql } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
// import { Trans } from '@lingui/macro'
import { useTranslation } from "react-i18next"

import LayoutWithHeaderImage from "../components/layout-with-header-image";

import "../css/screen.css"

// https://www.gatsbyjs.com/plugins/gatsby-plugin-local-search/#displaying-the-search-results
const SearchPage = ({ pageContext, data }) => {
  const [tempQueryString, setTempQueryString] = useState("");
  const [queryString, setQueryString] = useState("");

  const results = useFlexSearch(
    queryString,
    data.localSearchPages.index,
    data.localSearchPages.store
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setQueryString(tempQueryString);
  };
  const { t } = useTranslation("translation")
  return (
    <LayoutWithHeaderImage
      title={"Search"}
      alt={"Search"}
      pageContext={pageContext}
      tags={[]}
      fluid={data.file && data.file.childImageSharp.fluid}
    >
      <h1>{t("Search")}</h1>

      <form onSubmit={handleSubmit}>
        <label>
          {t("Search")}:
          <input
            type="text"
            style={{ placeholder: "Search" }}
            onChange={(e) => setTempQueryString(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>{t("Results")} {queryString}</h2>
  <p>{results.length} {t("results")}</p>
      <ul>
        {results && results.map(result=> 
          <li key={result.id}>
            <Link to={result.path}>{result.title}</Link> (
            {result.tags && result.tags.map((tag, index) => 
              <span key={index}>#{tag}</span>
            )})
            <br />
            {result.excerpt}
          </li>
        )
        }
      </ul>
    </LayoutWithHeaderImage>
  );
};

export default SearchPage;

export const searchPageQuery = graphql`
  query searchPageQuery {
    file(
      relativePath: { eq: "search.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    localSearchPages {
      index
      store
    }
  }
`;
