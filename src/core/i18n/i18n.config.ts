import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';



const resources = {
    en: {
        translation: {
            collection_title: "Next pick-up",
            collection_date: "Tommorow",
            chance_of_rain: "Chance of rain",
            language_options_title: "Choose language",
            language_options_dutch: "Dutch",
            language_options_english: "English"
        }
    }, 
    nl: {
        translation: {
            collection_title: "Volgende ophaling",
            collection_date: "Morgen",
            chance_of_rain: "Kans op neerslag",
            language_options_title: "Verander taal",
            language_options_dutch: "Nederlands",
            language_options_english: "Engels"
        }
    }
}

console.log(LanguageDetector)



i18n
    .use(initReactI18next)
    .init({
       resources,
       lng: "nl",
       debug: true
    })

export default i18n;