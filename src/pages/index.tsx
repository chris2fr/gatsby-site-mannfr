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
    { width: 800, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1600, itemsToShow: 4 },
    { width: 2000, itemsToShow: 5 },
    { width: 2400, itemsToShow: 6 },
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
        pagination={true}
        className="mann-carousel"
        enableMouseSwipe={true}
        focusOnSelect={true}
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
            <Link
              to={node.fields.uriPath + "/"}
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
        <div style={{ display: "flex", "justify-content": "space-around" }}>
          <div>
            <p>
              +33 7 68 40 38 38
              <br />
              chris@mann.fr
            </p>
          </div>
          <div>
            <h2>{t("current_projects")}</h2>
            <ul>
              <li>
                <a href={t("url_lesgrandsvoisins")}>
                  {t("Les Grands Voisins")}
                </a>
              </li>
              <li>
                <a href={"https://www.configmagic.com"}>ConfigMagic</a>
              </li>
              <li>
                <a href={"https://www.resdigita.com"}>ResDigita</a>
              </li>
              <li>
                <a href={"https://www.caplancity.com"}>CaPlanCity</a>
              </li>
            </ul>
          </div>
          <div>
          <p>I help :</p><ul><li>from audit to analysis to recommendations, to proposals, to implementation, to constant follow-up, to user-acceptance and after: all this by privileging an iterative approach</li><li>on definition, deployment, documentation, administration of servers and tools including content management systems, group productivity servers, cloud tools, GDPR compliance, etc.</li><li>through management of steering meetings, roadmap management, load planning, Agile meetings, listening and patient support of users with a focus on mastery at the appropriate levels</li><li>with specification, prototyping, development, testing, evaluation and re-evaluation of technology tips with a focus on elegant solutions.</li></ul>
          <i><p>J'interviens :</p> <ul>  <li>de l'audit aux analyses aux recommandations et/ou préconisations, aux propositions, à la mise en oeuvre, au suivi constant, à la recette et après: le tout en privilégiant une démarche itérative</li>  <li>de la définition, au déploiement, à la documentation, à l'administration de serveurs et d'outils dont des systèmes de gestion de contenu, des serveurs de productivité de groupe, des outils cloud, une conformité GDPR, etc. </li>  <li>de la gestion de réunions de pilotage, à la gestion de feuilles de route, à la planification en charges, aux réunions Agile, à l'écoute et accompagnement patients d'utilisateurs avec un accent sur la maîtrise aux niveaux adéquats </li>  <li>de la spécification, au prototypage, au développement, aux tests, à l'évaluation et la ré-evaluation d'astuces technologiques avec un priorité aux solutions élégantes.</li>  </ul></i>
          
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
