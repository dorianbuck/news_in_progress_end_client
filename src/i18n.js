import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  sv: {
    translation: { greeting: "Hej"}
  },
  en: {
    translation: { greeting: "Hi"}
  },
}

const fallbackLng = "en"



i18n.use(initReactI18next).init({
  resources,
  fallbackLng: fallbackLng,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

export default i18n;
