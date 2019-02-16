import React from 'react'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import flatten from 'flat'
import { addLocaleData, IntlProvider } from 'react-intl'
import { isUndefined, first, split, get } from 'lodash'

import frMessages from './fr.json'
import enMessages from './en.json'

addLocaleData([...en, ...fr])

/**
 * This function is used to get the user's browser
 * language
 * @returns {String} The user's language code
 */
const getLang = () => {
  if (!isUndefined(navigator.languages)) {
    return first(navigator.languages)
  }

  return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'fr'
}

const locale = first(split(getLang(), /[-_]/))
const messages = { fr: flatten(frMessages), en: flatten(enMessages) }

/**
 * This HOC component will wrap its children into an intl provider
 * @param {Object} Component A react component
 * @returns {Function} A react component
 */
export default Component => ({ children }) => (
  <IntlProvider locale={locale} messages={get(messages, locale)}>
    <Component />
  </IntlProvider>
)
