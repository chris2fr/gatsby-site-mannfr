import React from "react";
// import { Link } from "gatsby";
// import { useLocalization, LocalesList, LocalizedLink as Link  } from "gatsby-theme-i18n";

import MannfrCarousel from "../components/mannfr-carousel";
import Header from "../components/header";

import "../css/screen.css"
// // import "../css/single.css";
// // import "../css/utilities.css";
// import "../css/basics.css";
// // import "../css/layout.css";
// import "../css/tag.css";
// import "../css/kg.css";
// import "../css/header.css";
// import "../css/burger.css";
// import "../css/widget.css";

import "./index.css";

export default function IndexRoute({pageContext}) {
  // const { locale, config, defaultLang } = useLocalization();

  return (
    <>
      <Header pageContext={pageContext} />
      <MannfrCarousel />
    </>
  );
}
