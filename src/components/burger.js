import React from "react";
import {locale, LocalizedLink as Link} from "gatsby-theme-i18n"
import PeekABoo from "./peekaboo"

import "../css/burger.css"

class Burger extends React.Component  {

  render() {
    return (
      <PeekABoo>
      <div className={"canvas-close"}></div>
      <nav className={"main-menu widget"}>
        <ul className={"nav-list u-plain-list"}>
          <li className={"menu-item menu-item-home menu-item-current"}>
            <Link to="/" className="menu-item-link u-underline"  language={locale}>
              Home
            </Link>
          </li>
          <li className={"menu-item menu-item-home menu-item-current"}>
            <Link to="/contact/" className="menu-item-link u-underline" language={locale}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={"widget widget-recent"}>
        <h4 className={"widget-title"}>Recent Posts</h4>
        <div className={"recent-posts"}>
          <article className={"recent"}>
            <header className={"post-header"}>
              <div className={"post-meta"}>
                <span className={"post-meta-item post-meta-date"}>
                  <time dateTime="2020-11-11">6 days ago</time>
                </span>
                <span className={"post-meta-item post-meta-length"}>
                  1 min read
                </span>
                <span className={"post-meta-featured"}>
                  <i className={"icon icon-star"}></i>
                </span>
              </div>
              <h5 className={"post-title"}>
                <a className={"post-title-link"} href="/editorial/">
                  Editorial
                </a>
              </h5>
            </header>{" "}
          </article>
          <article className={"recent"}>
            <header className={"post-header"}>
              <div className={"post-meta"}>
                <span className={"post-meta-item post-meta-date"}>
                  <time dateTime="2020-07-30">4 months ago</time>
                </span>
                <span className={"post-meta-item post-meta-length"}>
                  1 min read
                </span>
              </div>
              <h5 className={"post-title"}>
                <a
                  className={"post-title-link"}
                  href="/acp-amazon-echo-americanchurchinparis/"
                >
                  Self-Contained Amazon Echo Show Mini-Video-Conference Device
                </a>
              </h5>
            </header>{" "}
          </article>
          <article className={"recent"}>
            <header className={"post-header"}>
              <div className={"post-meta"}>
                <span className={"post-meta-item post-meta-date"}>
                  <time dateTime="2020-04-28">7 months ago</time>
                </span>
                <span className={"post-meta-item post-meta-length"}>
                  1 min read
                </span>
              </div>
              <h5 className={"post-title"}>
                <a
                  className={"post-title-link"}
                  href="/mann-eirl-legal-information/"
                >
                  Legal Information
                </a>
              </h5>
            </header>
          </article>
        </div>
      </div>
    </PeekABoo>
    )

  }

}

export default Burger;