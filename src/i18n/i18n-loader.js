/**
 * For each locale we want to support, react-intl needs 1) the locale-data, which includes
 * information about how to format numbers, handle plurals, etc., and 2) the translations, as an
 * object holding message id / translated string pairs.  A locale string and the messages object are
 * passed into the IntlProvider element that wraps your element hierarchy.
 *
 * Note that react-intl has no way of checking if the translations you give it actually have
 * anything to do with the locale you pass it; it will happily use whatever messages object you pass
 * in.  However, if the locale data for the locale you passed into the IntlProvider was not
 * correctly installed with addLocaleData, all of your translations will fall back to the default
 * (in our case English), *even if you gave IntlProvider the correct messages object for that
 * locale*.
 */

import { addLocaleData } from 'react-intl';

import enLocale from 'react-intl/locale-data/en';

import esLocale from 'react-intl/locale-data/es';
import esMessages from './messages/es.json';

addLocaleData([...enLocale, ...esLocale]);

// temporary; set your browser language to Spanish to see es
const getLocale = (localeStr = window.navigator.language) => localeStr.substr(0, 2);

const getMessages = (locale = getLocale()) => (locale === 'es' ? esMessages : {});

export { getLocale, getMessages };
