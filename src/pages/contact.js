import React from "react";
import { graphql } from "gatsby";
// import { Trans } from '@lingui/macro'


import Layout from "../components/layout";
import PostHeader from "../components/post-header";

import "../css/screen.css"
import "./contact.css"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }

  render() {
    const { status } = this.state;

    return (
      <Layout pageContext={this.props.pageContext}>
        <article className="post tag-mann-fr single-post" style={{width:"100vw"}}>
        <PostHeader
          fluid={this.props.data.file.childImageSharp.fluid}
          alt={"Contact"}
          title={"Contact"}
          to={"/contact"}
          originalPath={"/contact"}
          tags={[{ uriPath: "/contact", uriSlug: "contact", name: "Contact" }]}
          single={true}
          style={{ position: "absolute", width: "100vw", height: "100%" }}

        />
         <div className="post-content kg-canvas u-text-format">

        <h1>Contact</h1>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mdopdrkj"
          method="POST"
        >
          <p>
            Chris Mann EIRL <br />
            <a href="mailto:chris@mann.fr">
              <strong>chris@mann.fr</strong>
            </a>{" "}
            <br />
            <a href="tel://+33768493838">+33 7 68 40 38 38</a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps/search/Chris+Mann%20EIRL,7%20place%20de%20l'Eglise,+Fontenay-aux-Roses,+92260+France"
              rel="noopener noreferrer"
            >
              <strong>Chris Mann EIRL</strong>
            </a>
            <br />
            <a
              href="https://www.google.com/maps/search/Chris+Mann%20EIRL,7%20place%20de%20l'Eglise,+Fontenay-aux-Roses,+92260+France"
              rel="noopener noreferrer"
            >
              <strong>7 place de l’Eglise</strong>
            </a>
            <br />
            <a
              href="https://www.google.com/maps/search/Chris+Mann%20EIRL,7%20place%20de%20l'Eglise,+Fontenay-aux-Roses,+92260+France"
              rel="noopener noreferrer"
            >
              <strong>Fontenay-aux-Roses, 92260</strong>
            </a>
            <br />
            <a
              href="https://www.google.com/maps/search/Chris+Mann%20EIRL,7%20place%20de%20l'Eglise,+Fontenay-aux-Roses,+92260+France"
              rel="noopener noreferrer"
            >
              <strong>France</strong>
            </a>
          </p>
          <label>Email:
          <input type="email" name="email" placeholder="email@example.com"/>
          </label><br/><label>Message:
          <textarea name="message" value={this.state.message} onChange={this.handleChange} 
          style={{placeholder:"Message...",width:"100%",minHeight:"150px"}} />
          </label><br/>
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>

        </div>
        </article>
      </Layout>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ message: "" });
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}



export const query = graphql`
  query {
    file(
      relativePath: { eq: "contact.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
