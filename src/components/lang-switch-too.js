import React from "react";
import "./langswitch.css";

import {
  LocalizedLink as Link,
  LocalesList,
  useLocalization,
} from "gatsby-theme-i18n";

// https://russmaxdesign.github.io/language-switcher/

const LangSwitchToo = ({ location, pageContext, ...props }) => {
  const { locale, config, defaultLang } = useLocalization();
  // const [currentLocale, setCurrentLocale] = useState(locale);
  // const onChangeLocale = (evt) => {
  //   evt.preventDefault();
  //   setCurrentLocale(evt.target.value)
  // }

  console.log(location, pageContext, props)

  return (
    <div
      className="language"
      aria-labelledby="language-swith1"
    >
      
      <p class="hidden" id="language-switcher2">
        Choose a language for this website
      </p>
      {["fr", "en", "un"].map((lang, index) => (
        <div
          key={`${lang}`}
          className={`language__container--left language__container--${lang}`}
        >
          <Link
            className="language__control"
            id="language1-1"
            name="language-switch1"
            value={`${lang}`}
            to={"/"}
            language={lang}
          >
            <span className="language__label" for="language1-1">
              {lang}
              <span className="hidden"> Language {lang}</span>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LangSwitchToo;
