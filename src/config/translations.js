import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import fr from '../locales/fr/fr.json'
import en from '../locales/en/en.json'

const resources = {
  fr,
  en
}

const langFav = () => {
  if (localStorage.getItem('lang') !== null) {
    return localStorage.getItem('lang')
  } else {
    return 'fr'
  }
}

i18n.use(initReactI18next).init({
  lng: langFav(),
  fallbackLng: 'en',
  resources,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
