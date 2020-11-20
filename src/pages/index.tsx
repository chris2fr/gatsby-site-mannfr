import React from "react";
// import { Link } from "gatsby";
import { useLocalization, LocalesList, LocalizedLink as Link  } from "gatsby-theme-i18n";

import MannfrCarousel from "../components/mannfr-carousel";
import Header from "../components/header";


// import "../css/single.css";
// import "../css/utilities.css";
import "../css/basics.css";
// import "../css/layout.css";
import "../css/tag.css";
import "../css/kg.css";
import "../css/header.css";
import "../css/burger.css";
import "../css/widget.css";

import "./index.css";

export default function IndexRoute() {
  const { locale, config, defaultLang } = useLocalization();

  return (
    <>
      <Header/>

      <MannfrCarousel />

      <p>Welcome to the Mann.fr Website. You can visit here:</p>
      <ul>
        <li>
          <Link to={"category"}  language={locale}>Digital</Link>
        </li>
        <li>Human</li>
        <li>Organizatios</li>
        <li>MANN.fr</li>
        <li>Human / Adult ADHD</li>
        <li>Photo &amp; Visual Arts</li>
      </ul>
      <div>
      <LocalesList />
    </div>
      <div>
        <div>Current locale: {locale}</div>
        <div>Current defaultLang: {defaultLang}</div>
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </div>
      <p>Below</p>
      </>
  );
}
