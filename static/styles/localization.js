const resources = {
  en: {
    translation: {
      firstText: "Engineering",
      secondText: "Machine Learning",
      thirdText: "Data Science",
      helloIAmText: "Hello, I am",
      aboutMeText: "About Me",
      anEngineerText: "An Engineer",
      aboutMeIntro:
        "I am an enthusiastic, highly motivated and driven engineer, with a deep passion for Energy,\
            Fluid Mechanics, Robotics, Machine Learning, and everything Engineering and \
            Technology related. I enjoy and welcome challenges. I enjoy programming, writing algorithms, optimizing code,\
            analysing data and running simulations. I also enjoy\
            working in a lab, conducting experiments in a wind tunnel or designing and testing a prototype.\
            I am a great problem solver, a fast learner, and a curious engineer, actively looking to add new skills\
             and knowledge to my repertoire.",
      aboutMeIntro2:
        "I have recently acquired the degree of Master of Science from ETH Zürich\
      and I am looking forward to applying my skills and knowledge in the industry.",
      aboutMeIntro3:
        "If you have any advice or suggestions,\
      or just want to say hi, feel free to use the options",
      belowText: "below",
      engineerText: "Engineer",
      hardworkingText: "Hardworking",
      embracingMentorshipText: "Embracing Mentorship",
      teamLeaderText: "Team Leader",
      positiveAttitudeText: "Positive Attitude",
      commitedText: "Commited",
      motivatedText: "Motivated",
      curiousText: "Curious",
      selfIntroText: "Self Introduction",
      whoIAmText: "Me",
      nameText: "name",
      ageText: "age",
      fromText: "from",
      fieldVar: "field",
      yearsOldText: "Years Old",
      fieldText: "Mechanical Eng.",
      experiencesText: "Experiences",
      curseMessage: "We don't talk like that here >_<",
      whatICanDoText: "What I Can Do",
      bestProjectsText: "",
      mainProjectsText: "",
      educationText: "Education",
      getInTouchText: "Get In Touch",
      contactMeText: "Contact me, with the options below.",
      sendAnEmailText: "Send an email",
      firstNameText: "First Name",
      lastNameText: "Last Name",
      emailText: "Email",
      phoneText: "Phone",
      yourMessageText: "Your message",
      emailSentText: "Email Sent!",
      weWillContactYouText: "We will contact you shortly.",
      thereWasAnIssueText: "There was an issue!",
      tryAgainLaterText: "Please try again later!",
      sendText: "Send",
      sendingText: "Sending...",
      myPortfolioText: "This is my Portfolio, hope you enjoyed it.",
      findMeOtherSocialMediaText: "Find me on LinkedIn and Xing",
      otherProjectsText: "Other projects",
      deLanguage: "Deutsch",
      enLanguage: "English",
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
