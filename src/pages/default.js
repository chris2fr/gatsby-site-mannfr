import React from "react"
import LayoutWithHeaderImage from "../components/layout-with-header-image"

// import LayoutWithHeaderImage from "../components/layout-with-header-image";
// export const DataContext = React.createContext();
// https://stackoverflow.com/questions/62057441/passing-location-and-pagecontext-from-page-to-child-components-in-gatsby

const DefaultPage = ({pageContext}) => {
  return (
  <LayoutWithHeaderImage
      pageContext={pageContext}
      >
  <h1>Default Page</h1>
  <p>This is a Default page</p>
  </LayoutWithHeaderImage>
  )
}

export default DefaultPage