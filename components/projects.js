Vue.component("projects", {
  data() {
    return {
      theme: "",
    };
  },
  created() {
    eventBus.$on("projectTheme", (newValue) => {
      this.theme = newValue;
    });
  },
  template: `
        <div>
        <h3 id="projects">Projects</h3>
        <hr class="divider">
        <p>Some of the projects I have worked on</p>
        <div class="row">
            <div class="col-md"> <a href="projects/pos-soft.html">
                    <div class="box-image"> <img src="static/images/POS_egzoni.png" alt="Retail Management Software">
                        <div class="box-name">
                            <p>Retail Management Software</p>
                        </div>
                    </div>
                </a></div>
            <div class="col-md"> <a href="projects/cfd-probe.html">
                    <div class="box-image"> <img src="static/images/cfd-probe.png" loading="lazy" alt="CFD Simulation">
                        <div class="box-name">
                            <p>Probe CFD Simulation</p>
                        </div>
                    </div>
                </a></div>
            <div class="col-md"> <a href="projects/climbx.html">
                <div class="box-image"> <img src="static/images/climbx.PNG" loading="lazy" alt="ClimbX">
                    <div class="box-name">
                        <p>ClimbX</p>
                    </div>
                </div>  
            </a></div>
            <div class="w-100"></div>
            <div class="col-md"> <a href="projects/tes.html">
                    <div class="box-image"> <img src="static/images/tes.jpg" loading="lazy" alt="Thermal Energy Storage Simulation">
                        <div class="box-name">
                            <p>Thermal Energy Storage Simulation</p>
                        </div>
                    </div>
                </a></div>
            <div class="col-md"> <a href="projects/taste-cnn.html">
                    <div class="box-image"> <img src="static/images/taste-cnn.png" loading="lazy" alt="Taste CNN">
                        <div class="box-name">
                            <p>Taste Similarity Determination</p>
                        </div>
                    </div>
                </a></div>
            <div class="col-md"> <a href="projects/sorting-visualizer.html">
                <div class="box-image"> <img src="static/images/sorting-visualizer1.webp" loading="lazy" alt="Sorting Visualizer Image">
                    <div class="box-name">
                        <p>Sorting Visualizer</p>
                    </div>
                </div>
            </a></div>
        </div>
        </div>
    `,
});
new Vue({ el: "#projects" });
