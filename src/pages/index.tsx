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
      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        className="mann-carousel"
        enableMouseSwipe={true}
        focusOnSelect={true}
        disableArrowsOnEnd={true}
        renderArrow={({ type, onClick }) => (
          <button
            className={
              "rec rec-arrow rec rec-arrow-" +
              (type === "NEXT" ? "right" : "left")
            }
            onClick={onClick}
            disabled={disabled}
          >
            {t(type)}
          </button>
        )}
      >
        {data.allMdx.nodes.map((node, index) => (
          <div className={"mann-carousel-item"} key={`tag-cover-${index}`}>
            {/* {node.fields.uriPath + "/"} */}
            <Link
              to={"#"}
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
      <div className={"home-blabla"} style={{ padding: "2em" }}>
        <h1>Chris Mann</h1>
        <div style={{ "display": "flex", "justify-content": "space-around", "flex-wrap": "wrap" }}>
          <div style={{ "flex-grow": "1"}}>
            <p>
            {t("statutdesc")}
              
              <br />
              +33 7 68 40 38 38
              <br />
              chris@mann.fr
              <br/>
              <a href="https://www.mann.fr/cv/cvcm-digital-2.pdf">{t("downloadcvhere")}</a>
            </p>
          </div>
          <div style={{ "flex-grow": "1"}}>
            <p>{t("current_projects")}:</p>
            <dl>
              <dt>{t("orgcons")} - <a href="https://www.assholasaservice.com">AssholeAsAService.com</a></dt>
              <dd>{t("assholeasaservicedesc")}</dd>
              <dt>
              {t("projcons")} - <a href={t("url_caplancity")}>CaPlanCity.com</a>
              </dt>
              <dd>{t("caplancitydesc")}</dd>
              <dt>
              {t("digcons")} - <a href={t("url_resdigita")}>ResDigita.com</a> - <a href={t("url_configmagic")}>ConfigMagic.com</a>
              </dt>
              <dd>{t("resdigitadesc")}<br/>{t("configmagicdesc")}</dd>
              <dt>
                {t("divcons")} - <a href={t("url_distractives")}>Distractives.com</a>
              </dt>
              <dd>{t("distractivesdesc")}</dd>
            </dl>
          </div>
          <div style={{ "flex-grow": "1"}}>
            <p>{t("ihelp")}</p>
            <ul>
              <li>{t("consultingdesc")}</li>
              <li>{t("engineeringdesc")}</li>
              <li>{t("organizationdesc")}</li>
              <li>{t("animationdesc")}</li>
            </ul>
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
