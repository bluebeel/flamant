import NextI18Next from "next-i18next";

export enum LanguageSupported {
  EN = "EN",
  FR = "FR",
  NL = "NL"
}

// If you change the config here, please change server.js file also
const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "EN",
  otherLanguages: ["EN", "FR","NL"],
  shallowRender: true
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const { appWithTranslation, useTranslation } = NextI18NextInstance;
