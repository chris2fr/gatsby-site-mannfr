import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import Carousel from "react-elastic-carousel";
// import { useLocalization, LocalesList, LocalizedLink as Link  } from "gatsby-theme-i18n";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
// import { Link } from "gatsby";
// import { useLocalization, LocalesList, LocalizedLink as Link  } from "gatsby-theme-i18n";
// import { Trans } from '@lingui/macro'
import Img from "gatsby-image";
import { useTranslation } from "react-i18next"

// import MannfrCarousel from "../components/mannfr-carousel";
import Header from "../components/header";

import "../css/screen.css";
// // import "../css/single.css";
// // import "../css/utilities.css";
// import "../css/basics.css";
// // import "../css/layout.css";
// import "../css/tag.css";
// import "../css/kg.css";
// import "../css/header.css";
// import "../css/burger.css";
// import "../css/widget.css";


import "../css/screen.css";
import "./index.css";
// import "../components/mannfr-carousel.css";

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return "en";
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return "en";

  switch (lang) {
    case "fr":
      return "fr";
    default:
      return "en";
  }
};

export default function IndexRoute({ pageContext, disabled, data }) {
  
  const { t } = useTranslation("translation")
  // const { locale, config, defaultLang } = useLocalization();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 1198, itemsToShow: 3 },
    { width: 1199, itemsToShow: 4 },
    { width: 1600, itemsToShow: 5 },
    { width: 2000, itemsToShow: 6 },
  ];
  pageContext.translations = ["en","fr"];
  if (pageContext.locale==="en-FR") {
    useEffect(() => {
      const urlLang = getRedirectLanguage();
  
      navigate(`/${urlLang}/`, {replace: true});
    }, []);
  
    return null;
  }

  return (
    <>
      <Header pageContext={pageContext} />

      <center>
      <p>{t("sentence1")}</p><p>
      <Link 
      to={"https://www.mann.pro"}
      style={{ textDecoration: "underline", fontWeight: "bold" }}
      >mann.pro</Link>.</p>

      <p>{t("sentence2")}</p>
      
      <p><Link 
      to={"https://www.libregood.org"}
      style={{ textDecoration: "underline", fontWeight: "bold" }}
      >libregood.org</Link></p>
      
      <p> {t("sentence3")}  </p>
      
      <p>
      <Link 
      to={"https://www.lesgrandsvoisins.com"}
      style={{ textDecoration: "underline", fontWeight: "bold" }}
      >LesGrandsVoisins.com</Link> is <Link 
      to={"https://www.agoodvillage.com"}
      style={{ textDecoration: "underline", fontWeight: "bold" }}
      >AGoodVillage.com</Link>.</p>

      <p>{t("sentence4")}</p>
      </center>

      <div className="overfig">
        <div className={"cat itprog"}>
          <h2>{t("itprog")}</h2>
          <div class="domain">
            <div className={"domain-work consult"}>
              <h3>{t("audit")}</h3>
              <ul>
                <li>{t("ppmo")}</li>
                <li>{t("projects")}</li>
                <li>{t("methodandquality")}</li>
              </ul>
            </div>
            <div className={"domain-work engineer"}>
              <h3>{t("engineering")}</h3>
              <ul>
                <li>{t("timeaccountingandforecasting")}</li>
                <li><Link
                to={"/articles/2022/hybrid-meetings"}
                style={{ display: "block" }}
                draggable={false}
                language={pageContext.locale}
              >{t("realhybridmeetings")}</Link></li>
                <li>{t("processandworkflowmanagement")}</li>
              </ul>
            </div>
            <div className={"domain-work steer"}>
              <h3>{t("accompagnement")}</h3>
              <ul>
                <li>{t("ceremonyfacilitation")}</li>
                <li>{t("backandchangelogmanagement")}</li>
                <li>{t("collaborativespecs")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={"cat digdev"}>
          <h2>{t("digdev")}</h2>
          <div class="domain">
            <div className={"domain-work consult"}>
              <h3>{t("audit")}</h3>
              <ul>
                <li>{t("productownershipassist")}</li>
                <li>{t("researchanddevelopment")}</li>
                <li>{t("rightsourcing")}</li>
              </ul>
            </div>
            <div className={"domain-work engineer"}>
              <h3>{t("engineering")}</h3>
              <ul>
                <li>{t("scriptprogramming")}</li>
                <li>{t("serveradmin")}</li>
                <li>{t("serviceandappintegration")}</li>
              </ul>
            </div>
            <div className={"domain-work steer"}>
              <h3>{t("accompagnement")}</h3>
              <ul>
                <li>{t("configurationmanagement")}</li>
                <li>{t("webmastering")}</li>
                <li>{t("qualitycontrol")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={"cat orgrob"}>
          <h2>{t("orgrob")}</h2>
          <div class="domain">
            <div className={"domain-work consult"}>
              <h3>{t("audit")}</h3>
              <ul>
                <li>{t("listeningforaadvocacy")}</li>
                <li>{t("wordsanddeedsalignment")}</li>
                <li>{t("betterment")}</li>
              </ul>
            </div>
            <div className={"domain-work engineer"}>
              <h3>{t("engineering")}</h3>
              <ul>
                <li>{t("docmanagement")}</li>
                <li>{t("gdprimplement")}</li>
                <li>{t("xborderroolouts")}</li>
              </ul>
            </div>
            <div className={"domain-work steer"}>
              <h3>{t("accompagnement")}</h3>
              <ul>
                <li>{t("individualcoaching")}</li>
                <li>{t("systemicinternalcommunication")}</li>
                <li>{t("psysocriskaudits")}*</li>
              </ul>
            </div>
          </div>
          * en partenariat / in partnership
        </div>
      </div>

      See also / Voir aussi <a href="https://www.lesgrandsvoisins.com">Les Grands Voisins  (.com)</a>.

      <div className={"home-blabla"}>
        <div className={"home-top"}>
          <div className={"title"}>
            <h2 className={"h2 with-sub"}>Chris Mann</h2>
            <p className={"sub-h2"}>Digital Executive</p>
            <p className={"p"}>
              +33 7 68 40 38 38
              <br />
              chris@mann.fr
              <br />
              <a href="https://www.mann.fr/cv/cvcm-digital-2.pdf" target="_new">
                {t("downloadcvhere")}
              </a>
            </p>
          </div>
          <div className={"video"}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ryCZwyp9Xas"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <a name="carousel"></a>
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          className="mann-carousel"
          enableMouseSwipe={true}
          focusOnSelect={true}
          disableArrowsOnEnd={true}
          renderArrow={({ type, onClick, isEdge }) => (
            <button
              className={
                "rec rec-arrow rec rec-arrow-" +
                (type === "NEXT" ? "right" : "left")
              }
              onClick={onClick}
              disabled={isEdge}
            >
              {t(type)}
            </button>
          )}
        >
          {data.allMdx.nodes.map((node, index) => (
            <div className={"mann-carousel-item"} key={`tag-cover-${index}`}>
              {/* {node.fields.uriPath + "/"} */}
              <Link
                to={"#carousel"}
                style={{ display: "block" }}
                draggable={false}
                language={pageContext.locale}
              >
                <div className={"tag"} draggable={false}>
                  <Img
                    className={"tag-img mann-carousel-img"}
                    fluid={
                      node.frontmatter.feature_image &&
                      node.frontmatter.feature_image.childImageSharp.fluid
                    }
                    alt={node.frontmatter.title}
                    draggable={false}
                    key={`tag-cover-image-${index}`}
                  />
                  <div className={"tag-content"}>
                    <h2 className={"tag-name"}>{node.frontmatter.title}</h2>
                    <div className={"tag-description"}>
                      {node.frontmatter.description || node.excerpt}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
        <div className={"home-bottom"}>
          <div className={"left"}>
            {/*/}
            <p>{t("ihelp")}</p>
            {/*/}
            <h3 className={"h3 with-sub"}>{t("itprog")}</h3>
            <p className={"sub-h3"}>
              ({t("see")} <a href={t("url_caplancity")}>CaplanCity.com</a>)
            </p>
            <p>{t("itprogdesc")}</p>
            <h3 className={"h3 with-sub"}>{t("digdev")}</h3>
            <p className={"sub-h3"}>
              ({t("see")} <a href={t("url_resdigita")}>ResDigita.com</a> &{" "}
              <a href={t("url_configmagic")}>ConfigMagic.com</a>)
            </p>
            <p>{t("digdevdesc")}</p>
            <h3 className={"h3 with-sub"}>{t("orgrob")}</h3>
            <p className={"sub-h3"}>
              ({t("see")}{" "}
              <a href="https://www.assholeasaservice.com">
                AssholeAsAService.com
              </a>{" "}
              & <a href={t("url_distractives")}>Distractives.com</a>
            </p>
            <p>{t("orgrobdesc")}</p>
            <p className={"grey-back"}>{t("statutdesc")}</p>
          </div>
          <div className={"right grey-back"}>
            <h3 className={"h3 with-sub"}>Les Grands Voisins</h3>
            <p className={"sub-h3"}>
              {t("lesgrandsvoisisntagline")}
              <br />({t("see")}{" "}
              <a href="https://www.lesgrandsvoisins.com">
                lesgrandsvoisins.com
              </a>
              )
            </p>
            <p>{t("lgvexemple")} .</p>
            <p>
              Tour Montparnasse
              <br />
              33 rue du Maine
              <br />
              75015 PARIS
              <br />
              52e étage - sur rendez-vous
            </p>
            <dl>
              <dt>{t("Voisins")}</dt>
              <dd>{t("VoisinsDesc")}</dd>
              <dt>{t("Bienscommuns")}</dt>
              <dd>{t("BienscommunsDesc")}</dd>
              <dt>{t("Cooperations")}</dt>
              <dd>{t("CooperationsDesc")}</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query IndexPageQuery($locale: String!) {
    allMdx(
      sort: { fields: frontmatter___order }
      filter: {
        frontmatter: { type: { eq: "hometag" } }
        fields: { realLocale: { eq: $locale } }
      }
    ) {
      nodes {
        body
        excerpt
        fields {
          uriPath
          realLocale
        }
        frontmatter {
          title
          description
          visibility
          feature_image {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fluid(quality: 80, maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
