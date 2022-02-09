Vue.component("header-component", {
  data() {
    return {
      dark: false,
      light: true,
      activeLn: "",
      languages: ["en", "de"],
    };
  },
  created() {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark") {
        this.dark = true;
        this.darkMode();
      }
      if (localStorage.getItem("theme") === "light") {
        this.light = true;
        this.lightMode();
      }
    } else {
      this.lightMode();
    }
    this.activeLn = localStorage.getItem("ln")
      ? localStorage.getItem("ln")
      : "en";
    var index = this.languages.indexOf(this.activeLn);
    this.languages.splice(index, 1);
    eventBus.$on("changeLanguage", (newValue) => {
      alert("Coming Soon...");
      // localStorage.setItem("ln", newValue);
      // window.location.reload();
    });
  },
  methods: {
    darkMode() {
      body = document.querySelector("#body");
      body.classList.add("dark-mode-body");
      eventBus.$emit("changeSkillColor", "white");
      eventBus.$emit("projectTheme", "dark");
      this.dark = true;
      this.light = false;
      localStorage.setItem("theme", "dark");
    },
    lightMode() {
      body = document.querySelector("#body");
      body.classList.remove("dark-mode-body");
      eventBus.$emit("changeSkillColor", "black");
      eventBus.$emit("projectTheme", "light");
      this.dark = false;
      this.light = true;
      localStorage.setItem("theme", "light");
    },
  },
  template: `
        <div>
        <div class="flag-menu-parent" tab-index="0">
            <div class="flag-active">
                <img :src="'/static/images/' + activeLn + '.png'" data-toggle="tooltip" data-placement="left" 
                    :title="i18next.t(activeLn + 'Language')">
            </div>
            <div class="flag-menu">
                <img v-for="ln in languages" :src="'/static/images/' + ln + '.png'" data-toggle="tooltip" data-placement="left" 
                    :title="i18next.t(ln + 'Language')" @click="eventBus.$emit('changeLanguage', ln)">  
            </div>
        </div>
        <div class="container">
            <span v-if="dark" class="fas fa-moon position-fixed text-warning" @click="lightMode"></span>
            <span v-if="light" class="fas fa-sun position-fixed text-warning" @click="darkMode"></span>
            <div class="row">
                <div class="col-md header-slanted"> 
                    <div class="slantedParent">
                        <div class="slanted">
                            <div class="row h-100">
                                <div class="col-md pl-5 py-5">
                                    <!-- <pre class="m-0" style="width: 235px; overflow: hidden;"><span class="text-success">#{{i18next.t("selfIntroText")}}</span><br><span class="text-danger font-weight-bold">{{i18next.t("whoIAmText")}}</span> <span class="text-muted">= {</span><br>    <span class="text-primary">{{i18next.t("nameText")}}:</span> <i class="intro-text">"Lindon Nuha",</i><br>    <span class="text-primary">{{i18next.t("ageText")}}:</span> <i class="intro-text">"25 {{i18next.t("yearsOldText")}}",</i><br>    <span class="text-primary">{{i18next.t("fieldVar")}}:</span> <i class="intro-text">"{{i18next.t("fieldText")}}"</i><br><span class="text-muted">}</span>
                                    </pre> -->
                                    <pre class="m-0" style="width: 235px; overflow: hidden;"><span class="text-success">#{{i18next.t("selfIntroText")}}</span><br><span class="text-danger font-weight-bold">class</span> <span class="text-muted">Me:</span><br>  <span class="text-warning font-weight-bold">def</span> <span class="text-muted">__init__(self):</span><br>    <span class="text-muted">self.</span><span class="text-primary">{{i18next.t("nameText")}} =</span> <i class="intro-text">"Lindon Nuha"</i><br>    <span class="text-muted">self.</span><span class="text-primary">{{i18next.t("ageText")}} =</span> <i class="intro-text">"25 {{i18next.t("yearsOldText")}}"</i><br>    <span class="text-muted">self.</span><span class="text-primary">{{i18next.t("fieldVar")}} =</span> <i class="intro-text">"Mech. Eng."</i><br><span class="text-muted">}</span>
                                    </pre>
                                </div>
                                <div class="col-md h-100">
                                    <img src="static/images/headerimg.webp" class="h-100">
                                </div>
                            </div>
                        </div>
                        <div class="slanted">
                            <div class="container__progressbars">

                                <div class="progressbar">
                                    <svg class="progressbar__svg">
                                        <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
                                    </svg>
                                    <span class="progressbar__text shadow-html">{{i18next.t("firstText")}}</span>
                                </div>
                    
                                <div class="progressbar">
                                    <svg class="progressbar__svg">
                                        <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-css shadow-css"> </circle>
                                    </svg>
                                    <span class="progressbar__text shadow-css" style="text-align: center;">{{i18next.t("secondText")}}</span>
                                </div>
                    
                                <div class="progressbar">
                                    <svg class="progressbar__svg">
                                        <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-python shadow-python"> </circle>
                                    </svg>
                                    <span class="progressbar__text shadow-python" style="text-align: center;">{{i18next.t("thirdText")}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md text-center" style="padding: 100px 5px;">
                    <p class="header-intro">{{i18next.t("helloIAmText")}}</p>
                    <hr class="devider header-devider">
                    <h1>LINDON NUHA</h1>
                    <h2> <a href="" class="typewrite" data-period="2000"
                            data-type='[ "${i18next.t(
                              "engineerText"
                            )}", "${i18next.t("hardworkingText")}",
                            "${i18next.t(
                              "embracingMentorshipText"
                            )}", "${i18next.t("teamLeaderText")}",
                            "${i18next.t("positiveAttitudeText")}",
                            "${i18next.t("motivatedText")}", "${i18next.t(
    "commitedText"
  )}", "${i18next.t("curiousText")}"]'>
                            <span class="wrap"></span> </a></h2>
                </div>
            </div>
        </div> <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 -150 950 380" class="wavy" style="z-index: 1;">
            <path d="M-314,267 C105,364 400,100 812,279" fill="none" class="header-wavy" stroke="white" stroke-width="120"
                stroke-linecap="round" />
        </svg>
    </div>
    `,
});
new Vue({ el: "#header-component" });
