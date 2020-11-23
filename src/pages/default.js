import React from "react";
import Layout from "../components/layout";
import { Trans, t } from '@lingui/macro'
import { i18n } from '@lingui/core'
// import { I18nProvider } from '@lingui/react'
// import { messages as enMessages } from '../../i18n/lingui/locales/en/messages.js'
// import { messages as frMessages } from '../../i18n/lingui/locales/fr/messages.js'
// import { messages as enFrMessages } from '../../i18n/lingui/locales/en-FR/messages.js'

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
  return (
      <Layout pageContext={pageContext}>
        <h1><Trans>Default Page</Trans></h1>
        <p><Trans>This is a default page.</Trans></p>
        <p>locale: {i18n._(t`${pageContext.locale}`)}</p>
      </Layout>
  );
    // </I18nProvider>
  };

export default DefaultPage;
