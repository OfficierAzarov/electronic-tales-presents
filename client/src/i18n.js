import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import languageEN from "./locate/en/translate.json";
import languageFR from "./locate/fr/translate.json";

i18n.use(LanguageDetector).init({
  resources: {
    en: languageEN,
    fr: languageFR,
  },
  /* When react i18next not finding any language to as default in browser */
  fallbackLng: "en",
  /* debugger For Development environment */
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: false,
    useSuspense: false,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default",
  },
});

export default i18n;
