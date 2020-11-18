import React from "react";
import { Link } from "gatsby";

import PeekABoo from "../components/peekaboo";
import MannfrCarousel from "../components/mannfr-carousel"

import "../css/basics.css";
import "./index.css";
import "../css/tag.css";
// import "../css/utilities.css";
import "../css/header.css";
import "../css/burger.css";
import "../css/widget.css";

export default function IndexRoute() {
  return (
    <>
      <header className={"site-header"}>
        <div className={"navbar"}>
          <Link to="/">
            <img
              className={"logo-image"}
              src="/images/boule.png"
              alt="MANN.FR"
            />
          </Link>
        </div>
      </header>

    <MannfrCarousel/>

      <p>Welcome to the Mann.fr Website. You can visit here:</p>
      <ul>
        <li>
          <Link to={"category"}>Digital</Link>
        </li>
        <li>Human</li>
        <li>Organizatios</li>
        <li>MANN.fr</li>
        <li>Human / Adult ADHD</li>
        <li>Photo &amp; Visual Arts</li>
      </ul>
      <PeekABoo>
            <div className={"canvas-close"}></div>
            <nav className={"main-menu widget"}>
              <ul className={"nav-list u-plain-list"}>
                <li className={"menu-item menu-item-home menu-item-current"}>
                  <Link to="/" className="menu-item-link u-underline">
                    Home
                  </Link>
                </li>
                <li className={"menu-item menu-item-home menu-item-current"}>
                  <Link to="/contact/" className="menu-item-link u-underline">
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
                        Self-Contained Amazon Echo Show Mini-Video-Conference
                        Device
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
                  </header>{" "}
                </article>
              </div>
            </div>
          </PeekABoo>

      <p>Below</p>
    </>
  );
}
