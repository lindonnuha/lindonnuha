Vue.component("skills", {
  data() {
    return {
      color: "black",
      defaultSkill: "skills-PL",
    };
  },
  created() {
    eventBus.$on("changeSkillColor", (newValue) => {
      this.color = newValue;
    });
  },
  mounted() {
    this.$refs.dBtn.click();
  },
  methods: {
    checkSkillTab(evt, skillTab) {
      let i, tabcontent, tablinks;

      tabcontent = document.getElementsByClassName("tab-content");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      document.getElementById(skillTab).style.display = "flex";
      evt.currentTarget.className += " active";
    },
  },
  template: `
        <div>
        <h3>{{i18next.t("whatICanDoText")}}</h3>
        <hr class="divider">
        <div class="skills-tabs" style="display: none">
            <button class="tablinks" ref="dBtn" @click="checkSkillTab($event, 'skills-PL')"> Programming Languages</button>
            <button class="tablinks" @click="checkSkillTab($event, 'skills-CFD')">CFD Software</button>
            <button class="tablinks" @click="checkSkillTab($event, 'skills-CAD')">CAD Software</button>
            <button class="tablinks" @click="checkSkillTab($event, 'skills-Other')">Other</button>
        </div>
        <div class="tab-content row skills-row" id="skills-PL"">
            <div class="col-md left-plate">
                <div class="backplate">
                    <div class="bar">
                        <div class="info">
                            <span>Python</span>
                        </div>
                        <div class="progress-line python">
                            <span></span>
                        </div>
                    </div>
                    <div class="bar">
                        <div class="info">
                            <span>C/C++</span>
                        </div>
                        <div class="progress-line c-cpp">
                            <span></span>
                        </div>
                    </div>
                    <div class="bar">
                        <div class="info">
                            <span>MATLAB</span>
                        </div>
                        <div class="progress-line matlab">
                            <span></span>
                        </div>
                    </div>
                    <div class="bar">
                        <div class="info">
                            <span>SQL</span>
                        </div>
                        <div class="progress-line sql">
                            <span></span>
                        </div>
                    </div>
                    <div class="bar">
                        <div class="info">
                            <span>R</span>
                        </div>
                        <div class="progress-line r">
                            <span></span>
                        </div>
                    </div>
                    <div class="bar">
                        <div class="info">
                            <span>Julia</span>
                        </div>
                        <div class="progress-line julia">
                            <span></span>
                        </div>
                    </div>                    
                </div>
            </div>
            <div class="col-md right-plate">
                <div class="col-md medium-plate row">
                    <div class="col-md small-plate">
                        <div class="backplate">
                        <h3 style="padding:10px; padding-bottom:0px;">CFD Software</h3>
                            <div class="skill-text">                                
                                <ul> 
                                <li>Ansys CFX</li>
                                <li>Ansys Fluent</li>
                                <li>Ansys ICEM CFD</li>
                                <ul>
                            </div>
                        </div> 
                    </div>
                    <div class="col-md small-plate">
                        <div class="backplate">
                        <h3 style="padding:10px; padding-bottom:0px;">CAD Software</h3>
                            <div class="skill-text">
                                    <ul> 
                                    <li>Solidworks</li>
                                    <li>Autodesk Inventor</li>
                                    <li>Keycreator</li>
                                    <ul> 
                            </div>
                        </div>  
                    </div>
                </div>
                <div class="col-md medium-plate"> 
                    <div class="backplate">
                    <h3 style="padding:10px; padding-bottom:0px;">Machine Learning/Data Science Libraries</h3>
                        <div class="row desktop-opt">
                            <div class="col-md"> 
                                <div class="skill-text">
                                        <ul> 
                                        <li>SciPy/NumPy/pandas</li>
                                        <li>TensorFlow/Keras/PyTorch</li>
                                        <li>Matplotlib/Seaborn</li>
                                        <ul> 
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="skill-text">
                                        <ul> 
                                        <li>scikit-learn</li>
                                        <li>PySpark</li>
                                        <li>OpenCV/MediaPipe</li>
                                        <ul> 
                                    </div> 
                            </div>
                        </div>
                        <div class="skill-text mobile-opt">
                                        <ul> 
                                        <li>SciPy/NumPy/pandas</li>
                                        <li>scikit-learn</li>
                                        <li>TensorFlow/Keras</li>
                                        <li>PyTorch</li>
                                        <li>Matplotlib/Seaborn</li>
                                        <li>OpenCV/MediaPipe</li>
                                        <ul> 
                                </div>
                    </div> 
                </div>
                <div class="col-md medium-plate"> 
                    <div class="backplate">
                    <h3 style="padding:10px; padding-bottom:0px;">Other</h3>
                        <div class="row desktop-opt">
                            <div class="col-md"> 
                                <div class="skill-text">
                                        <ul> 
                                        <li>MS Office</li>
                                        <li>LabView</li>
                                        <li>HTML/CSS</li>
                                        <ul> 
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="skill-text">
                                        <ul> 
                                        <li>VBA</li>
                                        <li>Arduino</li>
                                        <li>JavaScript/Vue.js</li>
                                        <ul> 
                                    </div> 
                            </div>
                        </div>
                        <div class="skill-text mobile-opt">
                                        <ul> 
                                        <li>MS Office</li>
                                        <li>VBA</li>
                                        <li>LabView</li>
                                        <li>Arduino</li>
                                        <li>HTML/CSS</li>
                                        <li>JavaScript/Vue.js</li>
                                        <ul> 
                                </div>
                    </div> 
                </div>
            </div>            
        </div>
    `,
});
new Vue({ el: "#skills" });
