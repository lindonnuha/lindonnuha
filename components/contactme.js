Vue.component("contact-form", {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      if (curseWords.some((v) => this.message.toLowerCase().includes(v))) {
        toastr.warning(i18next.t("curseMessage"), "Hey!", toastDefaults);
      } else {
        const btn = document.getElementById("button");
        btn.value = i18next.t("sendingText");
        emailjs
          .sendForm(
            "service_ogs415o",
            "template_qgpu58m",
            e.target,
            "user_03EztloTRlguTK1svazFC",
            {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              phone: this.phone,
              message: this.message,
            }
          )
          .then((res) => {
            setTimeout(() => {
              toastr.success(
                i18next.t("weWillContactYouText"),
                i18next.t("emailSentText"),
                toastDefaults
              );
              // Reset form field
              this.firstName = "";
              this.lastName = "";
              this.email = "";
              this.phone = "";
              this.message = "";
              btn.value = i18next.t("sendText");
            }, 1000);
          })
          .catch((err) => {
            toastr.error(
              i18next.t("tryAgainLaterText"),
              i18next.t("thereWasAnIssueText"),
              toastDefaults
            );
            btn.value = i18next.t("sendText");
          });
      }
    },
  },
  template: `
        <div>
            <h3>{{i18next.t("getInTouchText")}}</h3>
            <hr class="divider">
            <p>{{i18next.t("contactMeText")}}</p>
            <div class="row contact-border-right">
                <div class="col border-right border-primary text-center py-5"> <i class="fa fa-phone"></i>
                    <h4><a class="contactme-link" href="tel: +41764641699">+41 76 464 16 99</a></h4>
                </div>
                <div class="col border-right border-primary text-center py-5"> <i class="fa fa-envelope"></i>
                    <h4><a class="contactme-link" href="mailto: lindoni.12@gmail.com">lindoni.12@gmail.com</a></h4>
                </div>
                <div class="col text-center py-5"> <i class="fa fa-map-marker"></i>
                    <h4><a class="contactme-link" data-toggle="modal" href="#mapModal">Dübendorf, Zürich</a></h4>
                </div>
            </div>
            <div class="row contact-border-bottom">
                <div class="col border-bottom border-primary text-center py-5"> <i class="fa fa-phone"></i>
                    <h4><a class="contactme-link" href="tel: +41764641699">+41 76 464 16 99</a></h4>
                </div>
                <div class="col border-bottom border-primary text-center py-5"> <i class="fa fa-envelope"></i>
                    <h4><a class="contactme-link" href="mailto: lindoni.12@gmail.com">lindoni.12@gmail.com</a></h4>
                </div>
                <div class="col text-center py-5"><i class="fa fa-map-marker"></i>
                    <h4><a class="contactme-link" data-toggle="modal" href="#mapModal">Dübendorf, Zürich</a></h4>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="mapModal" tabindex="-1" role="dialog" aria-labelledby="mapModalTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="mapModalLongTitle">Dübendorf, Zürich</h5>
                    <button id="modal-btn" type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <iframe id="iframe-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43219.59016212356!2d8.582940664215888!3d47.38805466758664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa16e9fccf341%3A0xcf74391d679b58a2!2sD%C3%BCbendorf%2C%20Switzerland!5e0!3m2!1sen!2s!4v1643475380392!5m2!1sen!2s" allowfullscreen="" loading="lazy"></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="wrapper margin-5-10">
                <h4 class="text m-0">{{i18next.t("sendAnEmailText")}}</h4>
                <form class="form p-3 m-0" id="form" @submit.prevent="sendEmail">
                    <div class="row">
                        <input class="col-md my-2 mr-2 form-control" placeholder="${i18next.t(
                          "firstNameText"
                        )}" name="firstName" id="firstName" required v-model="firstName">
                        <input class="col-md my-2 mr-2 form-control" placeholder="${i18next.t(
                          "lastNameText"
                        )}" name="lastName" id="lastName" required v-model="lastName">
                    </div>
                    <div class="row">
                        <input class="col-md my-2 mr-2 form-control" placeholder="${i18next.t(
                          "emailText"
                        )}" name="email" id="email" required v-model="email">
                        <input class="col-md my-2 mr-2 form-control" placeholder="${i18next.t(
                          "phoneText"
                        )}" name="phone" id="phone" required v-model="phone">
                    </div>
                    <div class="row">
                        <textarea placeholder="${i18next.t(
                          "yourMessageText"
                        )}" rows="3" name="message" id="message" minlength="15" class="my-2 mr-2 form-control" v-model="message"></textarea>
                    </div>
                    <div class="row">
                        <input class="btn btn-primary my-2 mr-2 w-100" type="submit" id="button" value="${i18next.t(
                          "sendText"
                        )}">
                    </div>
                </form>
            </div>
        </div>
    `,
});
new Vue({ el: "#contact" });
