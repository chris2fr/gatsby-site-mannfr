import React from "react";
import {
  LocalizedLink as Link
} from "gatsby-theme-i18n"
// import { Trans } from '@lingui/macro'
// import { i18n } from '@lingui/core'
import { useTranslation } from "react-i18next"

// import "../css/screen.css"
import "./langswitch.css";

// https://russmaxdesign.github.io/language-switcher/

const LangSwitch = ({ pageContext }) => {
  // const { locale } = useLocalization();
  // const t = i18n.t.bind(i18n)
  const locale = pageContext.locale
  const { t } = useTranslation("translation")
  return (
    <div
      className="language"
      aria-labelledby="language-swith1"
    >
      <p className="hidden" id="language-switcher2">
        {t("Choose a language for this website")}
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
          {t(lang)}
              <span className="hidden"> Language {t(lang)}</span>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LangSwitch;
