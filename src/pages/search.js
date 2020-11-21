// import React from "react";
import React, { useState } from "react";
import { graphql } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import {
  LocalizedLink as Link,
} from "gatsby-theme-i18n";

import LayoutWithHeaderImage from "../components/layout-with-header-image";

const SearchPage = ({location, data}) => {

  const [tempQueryString, setTempQueryString] = useState("");
  const [queryString, setQueryString] = useState("");
  
    // const { index, store } = data.localSearchPages; // https://www.gatsbyjs.com/plugins/gatsby-plugin-local-search/#displaying-the-search-results
    const results = useFlexSearch(
            queryString,
            data.localSearchPages.index,
            data.localSearchPages.store
          );

      console.log(queryString)
    
      const handleSubmit = (evt) => {
        evt.preventDefault();
        setQueryString(tempQueryString);
        console.log(results)
      }


    return (
      <LayoutWithHeaderImage
        title={"Search"}
        alt={"Search"}
        to={location.pathname}
        tags={[]}
        fluid={
          data.file && data.file.childImageSharp.fluid
        }
      >
        <h1>Search</h1>

        <p>This is the future search form.</p>
        <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input
          type="text"
          style={{"placeholder":"Search"}}
          onChange={e => setTempQueryString(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
      <h2>Results {queryString}</h2>
        <ul>
          {results.map((result) => (
            <li key={result.id}><Link to={"/" + result.path}>{result.title}</Link> {result.tags.map((tag,index) => <span key={index}>#{tag} </span>)}<br/>{result.excerpt}</li>
          ))}
        </ul>
      </LayoutWithHeaderImage>
    )
  }
// }

export default SearchPage

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
