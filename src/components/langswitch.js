import React from "react";
import {
  LocalizedLink as Link,
  useLocalization,
} from "gatsby-theme-i18n"
import { Trans, t } from '@lingui/macro'
import { i18n } from '@lingui/core'

// import "../css/screen.css"
import "./langswitch.css";

// https://russmaxdesign.github.io/language-switcher/

const LangSwitch = ({ pageContext }) => {
  const { locale } = useLocalization();

  return (
    <div
      className="language"
      aria-labelledby="language-swith1"
    >
      <p className="hidden" id="language-switcher2">
        <Trans>Choose a language for this website</Trans>
      </p>
      {["en", "fr", "en-FR"].map((lang, index) => (
        <div
          key={`${lang}`}
          className={`language__container--${(index===0)?"left":(index<2)?"middle":"right"} language__container--${lang}`}
        >
          <Link
            className={`language__control ${(lang===locale)?"language__control--current":""}`}
            id="language1-1"
            name="language-switch1"
            value={`${lang}`}
            to={pageContext.originalPath}
            language={lang}
          >
          <span className={`language__label ${(lang===locale)?"language__control--current":""}`} for="language1-1">
          {i18n._(t`${lang}`)}
              <span className="hidden"> Language {i18n._(t`${lang}`)}{lang}</span>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LangSwitch;
