const resources = {
  en: {
    translation: {
      otherProjectsText: "Other projects",
      selectText: "Select",
      configText: "Configuration",
      selectOneText: "Please select one",
    },
  },
  de: {},
};
const setLocale = (language) => {
  i18next.init({
    fallbackLng: ["en"],
    lng: language,
    resources,
  });
};
var url = new URL(window.location.href);
setLocale(localStorage.getItem("ln"));
