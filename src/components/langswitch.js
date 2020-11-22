import React, { useState } from "react";
import "./langswitch.css";
import {
  LocalizedLink as Link,
  LocalesList,
  useLocalization,
} from "gatsby-theme-i18n";

// https://russmaxdesign.github.io/language-switcher/

const LangSwitch = ({ pageContext }) => {
  const { locale, config, defaultLang } = useLocalization();

  return (
    <div
      className="language"
      aria-labelledby="language-swith1"
    >
      <p class="hidden" id="language-switcher2">
        Choose a language for this website
      </p>
      {["en", "fr", "un"].map((lang, index) => (
        <div
          key={`${lang}`}
          className={`language__container--${(index==0)?"left":(index<2)?"middle":"right"} language__container--${lang}`}
        >
          <Link
            className={`language__control ${(lang==locale)?"language__control--current":""}`}
            id="language1-1"
            name="language-switch1"
            value={`${lang}`}
            to={pageContext.originalPath}
            language={lang}
          >
          <span className={`language__label ${(lang==locale)?"language__control--current":""}`} for="language1-1">
              {lang}
              <span className="hidden"> Language {lang}</span>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LangSwitch;
