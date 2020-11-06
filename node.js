const i18n = require('i18next')
const Backend = require('i18next-fs-backend')
const { parse } = require('accept-language-parser')

module.exports = (req, file = 'server') => {
  const langs = [... new Set(parse(req.headers['accept-language']).map(lng => lng.code))]
  return i18n.use(Backend).init({
    lng: langs[0],
    fallbackLng: langs.slice(1).concat('en'),
    backend: { loadPath: `locales/${file}/{{lng}}.yml` }
  })
}
