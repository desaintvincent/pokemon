import React, { useState, createContext, useContext } from 'react'
import { IntlProvider as RealIntlProvider, useIntl as useRealIntl } from 'react-intl'
import messagesFr from '../lang/fr.json'
import messagesEn from '../lang/en.json'

const flat = (obj, acckey = '') => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = acckey ? `${acckey}.${key}` : key
    return {
      ...acc,
      ...(typeof value === 'object' ? flat(value, newKey) : { [newKey]: value })
    }
  }, {})
}

const messages = {
  fr: flat(messagesFr),
  en: flat(messagesEn)
}

const locales = {
  fr: 'Français',
  en: 'English'
}

const IntlContext = createContext({})

const useIntl = () => {
  return useContext(IntlContext)
}

const CustomIntlProvider = ({ children, setLocale }) => {
  const intl = useRealIntl()
  return (
    <IntlContext.Provider value={{ ...intl, setLocale, locales }}>
      {children}
    </IntlContext.Provider>
  )
}

const IntlProvider = ({ children }) => {
  const [locale, setLocale] = useState('en')
  return (
    <RealIntlProvider locale={locale} messages={messages[locale]}>
      <CustomIntlProvider setLocale={setLocale}>
        {children}
      </CustomIntlProvider>
    </RealIntlProvider>
  )
}

export { useIntl }
export default IntlProvider
