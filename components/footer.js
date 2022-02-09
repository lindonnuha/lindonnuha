Vue.component("footer-component", {
  data() {
    return {
      quote: "",
      author: "",
      ln: "",
    };
  },
  created() {
    this.getQuote();
    this.ln = localStorage.getItem("ln") ? localStorage.getItem("ln") : "en";
  },
  methods: {
    getQuote() {
      axios
        .get("https://api.quotable.io/random?tags=technology")
        .then((res) => {
          this.quote = res.data.content;
          this.author = res.data.author;
        })
        .catch((error) => {
          toastr.error(
            i18next.t("tryAgainLaterText"),
            i18next.t("thereWasAnIssueText"),
            toastDefaults
          );
        });
    },
  },
  template: `
        <div>
        <div class="row pb-3">
            <div class="col-md text-center">
                <h4> {{i18next.t("myPortfolioText")}}</h4> <small class="text-secondary">Lindon Nuha &copy;
                    copyright</small><br>
                    <span @click="eventBus.$emit('changeLanguage', 'en')" class="cursor-pointer h4 pb-2" 
                        :class="{'border-bottom': ln === 'en'}"><img src="/static/images/en.png" width="35px"></span>
                    <span @click="eventBus.$emit('changeLanguage', 'de')" class="cursor-pointer h4 pb-2" 
                        :class="{'border-bottom': ln === 'de'}"><img src="/static/images/de.png" width="35px"></span>
            </div>
            <div class="col-md text-center footer-last">
                <h4> {{i18next.t("findMeOtherSocialMediaText")}}</h4> </i> 
                <a href="https://www.linkedin.com/in/Nuha-Lindon/"> <i class="fa fa-linkedin"></i> </a>
                <a href="https://www.linkedin.com/in/Nuha-Lindon/"> <i class="fa fa-xing"></i> </a>
            </div>
        </div>
    </div>
    `,
});
new Vue({ el: "#footer" });
