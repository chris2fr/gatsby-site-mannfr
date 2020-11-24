import React from "react";
import Layout from "../components/layout";
// import { Trans } from '@lingui/macro'
// import { i18n } from '@lingui/core'
// import { I18nProvider } from '@lingui/react'
// import { messages as enMessages } from '../../i18n/lingui/locales/en/messages.js'
// import { messages as frMessages } from '../../i18n/lingui/locales/fr/messages.js'
// import { messages as enFrMessages } from '../../i18n/lingui/locales/en-FR/messages.js'
import { useTranslation } from "react-i18next"

import "../css/screen.css"

// const langMessages = {
//   "en":enMessages,
//   'fr':frMessages,
//   "en-FR":enFrMessages
// }

const DefaultPage = ({ pageContext }) => {
  // // import { messages } from `../../i18n/lingui/locales/${pageContext.locale}/messages.js`
  // const locale = (pageContext.locale)?pageContext.locale:"en-FR";
  // i18n.load(locale, langMessages[`${locale}`]);
  // //i18n.load(locale, langMessages["fr"]);
  // i18n.activate(locale)
  // console.log(i18n)
    // <I18nProvider i18n={i18n}>
    // console.log(pageContext)
    const { t } = useTranslation("translation")
  return (
      <Layout pageContext={pageContext}>
        <h1>{t("Default Page")}</h1>
        <p>{t("This is a default page.")}</p>
        <p>locale: {t(pageContext.locale)}</p>
      </Layout>
  );
    // </I18nProvider>
  };

export default DefaultPage;
