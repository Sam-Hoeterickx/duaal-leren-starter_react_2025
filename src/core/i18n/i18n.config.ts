import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';



const resources = {
    en: {
        translation: {
            collection_title: "Next pick-up",
            collection_date: "Tommorow",
            chance_of_rain: "Chance of rain"
        }
    }, 
    nl: {
        translation: {
            collection_title: "Volgende ophaling",
            collection_date: "Morgen",
            chance_of_rain: "Kans op neerslag"
        }
    }
}

console.log(LanguageDetector)



i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
       resources,
       supportedLngs: ['en', 'nl'],
       fallbackLng: 'nl',
       debug: true
    })

export default i18n;