/* notglobal GATSBY_THEME_I18N_LINGUI */

import * as React from "react"
// import { Trans, t } from '@lingui/macro'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { plural } from '@lingui/macro'
import { en as pluralEn, fr as pluralFr } from 'make-plural' // https://developer.aliyun.com/mirror/npm/package/make-plural/v/3.0.2 // 

import { messages as enMessages } from './i18n/lingui/locales/en/messages.js'
import { messages as frMessages } from './i18n/lingui/locales/fr/messages.js'
import { messages as enFrMessages } from './i18n/lingui/locales/en-FR/messages.js'

// enMessages.plurals = pluralEn;
// frMessages.plurals = pluralFr;
// enFrMessages.plurals = pluralEn;

const wrapPageElement = ({element, props}) => {
  const locale = props.pageContext.locale // (props.pageContexte.locale)?props.pageContexte.locale:"en-FR";
  // const catalog = langMessages[locale] //require(`${GATSBY_THEME_I18N_LINGUI}/${locale}/messages.js`)
  //let msgsLibPlace =  `./i18n/lingui/locales/${locale}/messages.js`
  //const catalog = require(msgsLibPlace)
  //  
  i18n.load({
    "en":enMessages,
    'fr':frMessages,
    "en-FR":enFrMessages
  });
  i18n.loadLocaleData("en",{plurals: pluralEn})
  i18n.loadLocaleData("fr",{plurals: pluralFr})
  i18n.loadLocaleData("en-FR",{plurals: pluralEn})
  //i18n.load(locale, langMessages["fr"]);
  i18n.activate(locale)
  // element.props = props
  // <I18nProvider i18n={i18n}>
  // <I18nProvider language={locale} catalogs={{ [locale]: catalog }}>
  // console.log(locale,catalog)
  return (
    <I18nProvider i18n={i18n}>
      {element}
    </I18nProvider>
  )
}

export { wrapPageElement }
