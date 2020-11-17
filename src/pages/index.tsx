import React from "react";
import { Link } from "gatsby";

import PeekABoo from "../components/peekaboo";

import "../css/basics.css";
import "./index.css";
import "../css/tag.css";
import "../css/utilities.css";
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
      <div className={"mann-homegrid-outer"}>
        <div className={"mann-homegrid-stage"}>
          <div className={"mann-homegrid-item"}>
            <div className={"tag u-placeholder"}>
              <img
                className={"tag-image u-object-fit lazyloaded"}
                src="./images/peter-tablet.png"
                alt="Digital"
              />
              <div className={"tag-content"}>
                <h2 className={"tag-name"}> Digital</h2>
                <div className={"tag-description"}>
                  You work in the heart of the cyber infrastructure. You peddle
                  the bicycle that powers your company and the work of your
                  clients. MANN.FR can help!
                </div>
              </div>
              <Link className={"u-permalink"} to="/tag/digital/"></Link>
            </div>
          </div>
          <div className={"mann-homegrid-item"}>
            <div className={"tag u-placeholder"}>
              <img
                className={"tag-image u-object-fit lazyloaded"}
                src="./images/dancing-king.jpg"
                alt="Human"
              />
              <div className={"tag-content"}>
                <h2 className={"tag-name"}> Human</h2>
                <div className={"tag-description"}>
                  You work and live in a structure. You cooperate, collaborate
                  and create. MANN.FR can help you do so with sereine power.
                </div>
              </div>
              <Link className={"u-permalink"} to="/tag/human/"></Link>
            </div>
          </div>
          {/*/}
          <div className={"mann-homegrid-item mann-background-mann-fr"}>
            <div className={"tag u-placeholder"}>
              <img
                className={"tag-image u-object-fit lazyloaded"}
                data-src="/content/images/2020/11/boule-1.png"
                src="./mann-fr_files/boule-1.png"
                alt=" MANN.FR"
              />
              <div className={"tag-content"}>
                <h2 className={"tag-name"}> MANN.FR</h2>
                <div className={"tag-description"}>
                  MANN.FR is a business, my business as Chris Mann. You may
                  learn more about this business and associated products and
                  services useful to you.
                </div>
              </div>
              <a
                className={"u-permalink"}
                href="https://en.mann.fr/tag/mann-fr/"
              ></a>
            </div>
          </div>
{/*/}
          <div className={"mann-homegrid-item  active"}>
            <div className={"tag u-placeholder"}>
              <img
                className={"tag-image u-object-fit lazyloaded"}
                src="./images/bees-465x550.jpeg"
                alt="Organization"
              />
              <div className={"tag-content"}>
                <h2 className={"tag-name"}> Organization</h2>
                <div className={"tag-description"}>
                  Your are an organization striving for inclusion because it
                  makes you more robust. MANN.FR will innovate with you, invent
                  and create, making those stalled projects move forward kindly.
                </div>
              </div>
              <Link className={"u-permalink"} to="/tag/orgs/"></Link>
            </div>
          </div>
          {/*/}
          <div className={"mann-homegrid-item "}>
            <div className={"tag u-placeholder"}>
              <img
                className={"tag-image u-object-fit lazyloaded"}
                data-src="/content/images/2020/11/tnoc-7432.jpg"
                src="./mann-fr_files/tnoc-7432.jpg"
                alt="Human / Adult-ADHD"
              />
              <div className={"tag-content"}>
                <h2 className={"tag-name"}>Human / Adult-ADHD</h2>
                <div className={"tag-description"}>
                  You have Adult ADHD and with to thrive fully as you
                  compensating for this difference that can be handicap. MANN.FR
                  can address the specifics and move beyond this part of you.
                </div>
              </div>
              <a
                className={"u-permalink"}
                href="https://en.mann.fr/tag/human-adult-adhd/"
              ></a>
            </div>
          </div>

          <div className={"mann-homegrid-item"}>
            <div className={"tag u-placeholder"}>
              <img
                className={"tag-image u-object-fit lazyloaded"}
                data-src="/content/images/2020/11/Chris_Mann_Photo-65-e1567510883586-1.jpg"
                src="./mann-fr_files/Chris_Mann_Photo-65-e1567510883586-1.jpg"
                alt="Photo"
              />
              <div className={"tag-content"}>
                <h2 className={"tag-name"}>Photo</h2>
                <div className={"tag-description"}>
                  You are a photographer or a consumer of photography. MANN.FR
                  federates photographers, sets up common photographic events
                  and shares resources.
                </div>
              </div>
              <a
                className={"u-permalink"}
                href="https://en.mann.fr/tag/photo/"
              ></a>
            </div>
          </div>
          {/*/}
        </div>
      </div>

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
