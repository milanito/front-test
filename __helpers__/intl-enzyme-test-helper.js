import React from 'react'
import flatten from 'flat'
import { mount, shallow } from 'enzyme'
import { IntlProvider, intlShape } from 'react-intl'

import enMessages from '../src/config/translations/en.json'

const intlProvider = new IntlProvider({
  locale: 'en',
  messages: flatten(enMessages)
}, {})
const { intl } = intlProvider.getChildContext()

/**
 * This will add the intl object to the component props
 * @param {Object} node A react node
 * @returns {Object} A react node
 */
const nodeWithIntlProp = node => React.cloneElement(node, { intl })

/**
 * This functions wraps a shallowed component with an intl in its context
 * @param {Object} node The node to shallow
 * @param {Object} context The node context
 * @param {Array} additionalOptions The node's options
 * @returns {Object} a shallowed component
 */
export const shallowWithIntl = (node, { context, ...additionalOptions } = {}) =>
  shallow(nodeWithIntlProp(node), {
    context: Object.assign({}, context, { intl }),
    ...additionalOptions,
  })


/**
 * This functions wraps a mounted component with an intl in its context
 * @param {Object} node The node to shallow
 * @param {Object} context The node context
 * @param {Array} additionalOptions The node's options
 * @returns {Object} a mounted component
 */
export const mountWithIntl = (node, { context, childContextTypes, ...additionalOptions } = {}) =>
  mount(nodeWithIntlProp(node), {
    context: Object.assign({}, context, { intl }),
    childContextTypes: Object.assign({}, { intl: intlShape }, childContextTypes),
    ...additionalOptions,
  })
