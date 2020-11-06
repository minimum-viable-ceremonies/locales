const locales = require('i18next')
const { initReactI18next } = require('react-i18next')

module.exports = file =>
  locales
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      languages: ['en'],
      resources: {
        en: { translations: require(`../locales/${file}/en.yml`) }
      },
      ns: ['translations'],
      defaultNS: 'translations',
      returnObjects: true,
      interpolation: { escapeValue: false },
      react: { wait: true }
    })
