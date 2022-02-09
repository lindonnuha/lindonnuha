Vue.component("cfd-probe", {
  template: `
        <div>
        <a id="home"><i class="fa fa-home" aria-hidden="true"></i></a>
        <span class="fas fa-sun position-fixed text-warning" onclick="darkModeToggle()" id="sun"></span>
        <span class="fas fa-moon position-fixed text-warning" onclick="darkModeToggle()" id="moon"></span>
        <div id="carouselExampleIndicators" class="carousel slide my-3" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
        </ol>
        <div class="carousel-inner container">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../static/images/projects/cfd-1.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../static/images/projects/cfd-2.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../static/images/projects/cfd-3.png" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../static/images/projects/cfd-4.png" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../static/images/projects/cfd-5.png" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../static/images/projects/cfd-6.png" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../static/images/projects/cfd-7.png" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <i class="fa fa-angle-left text-primary"></i>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <i class="fa fa-angle-right text-primary"></i>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="jumbotron jumbotron-fluid my-0">
        <div class="container">
          <h1 class="display-4" style="font-size: 32pt;">Investigation of probe-flow field interaction using three dimensional unsteady wet steam flow modelling
          </h1>
          <p class="lead">The probe was developed at the <a href="https://lec.ethz.ch/" target="blank_"> 
          Laboratory for Energy Conversion (LEC)</a> and is used to carry out droplet measurements in an LP Turbine.</p>
          <p class="lead">The following were investigated:<br>
          • The sensitivity to flow angles<br>
          • The sensitivity to Mach numbers<br>
          • The impact of alternative probe geometries on mitigating the effects on the flow field<br> 
          <u>Note:</u> Only a small part of the results have been shown in the images above</p>
          <p class="lead">The following software was used to conduct this investigation:</p>
          <ul class="list-group">
            <li class="list-group-item bg-transparent"><strong>Solidworks</strong> - Model the probe</li>
            <li class="list-group-item bg-transparent"><strong>Ansys ICEM CFD</strong> - Generate the mesh for analysis</li>
            <li class="list-group-item bg-transparent"><strong>Ansys CFX</strong> - Carry out the CFD simulation</li>
            <li class="list-group-item bg-transparent"><strong>Ansys CFD-Post</strong> - Post-process the results</li>
          </ul>
          <p class="text-primary">{{i18next.t("otherProjectsText")}}:</p>
        </div>
        <div class="imageContainer mt-5">
          <div class="project-image project-img-1" style="background-image: url('../static/images/pos_egzoni.png')"
            onclick="projectRedirect('/projects/pos-soft')">
          </div>

          <div class="project-image project-img-2" style="background-image: url('../static/images/taste-cnn.png')"
            onclick="projectRedirect('/projects/taste-cnn')">
          </div>

          <div class="project-image project-img-3" style="background-image: url('../static/images/sorting-visualizer1.webp')"
            onclick="projectRedirect('/projects/sorting-visualizer')">
          </div>
        </div>
      </div>
    </div>
    `,
});
new Vue({ el: "#cfd-probe" });
