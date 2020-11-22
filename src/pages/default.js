import React from "react";
import Layout from "../components/layout";

const DefaultPage = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <>
      <Layout pageContext={pageContext}>
        <h1>Default Page</h1>
        <p>This is a Default page</p>
      </Layout>
    </>
  );
};

export default DefaultPage;
