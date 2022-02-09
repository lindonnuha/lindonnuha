Vue.component("about-me", {
  template: `
        <div>
            <h3 id="about-me">{{i18next.t("aboutMeText")}}</h3>
            <hr class="divider">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="text-primary">An Engineer</h2>
                    <p> {{i18next.t("aboutMeIntro")}} <br>
                    {{i18next.t("aboutMeIntro2")}} <br>
                    {{i18next.t("aboutMeIntro3")}} <a href="#contact">{{i18next.t("belowText")}}!</a></p> 
                </div>
                <div class="col-md-6 text-center my-3"> <img src="static/images/photo.jpg" class="about-me-image"></div>
            </div>
        </div>
    `,
});
new Vue({ el: "#about-me" });
