Vue.component("tes", {
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
        </ol>
        <div class="carousel-inner container">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../static/images/projects/tes-1.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../static/images/projects/tes-2.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../static/images/projects/tes-3.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../static/images/projects/tes-4.png" alt="Third slide">
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
          <h1 class="display-4">Thermal Energy Storage Simulation</h1>
          <p class="lead">Developed a CFD tool to simulate the operation of a Thermal Energy Storage system, including: <br>
          • Charging/Discharging Temperatures<br> 
          • Exergy Efficiency<br>
          • Capacity Factor<br>
          • etc.<br></p>
          <p class="lead">Technologies used to develop the tool:</p>
          <ul class="list-group">
            <li class="list-group-item bg-transparent"><strong>C++</strong> - Write the logic/functionality of the CFD simulation tool</li>
            <li class="list-group-item bg-transparent"><strong>MATLAB</strong> - Post-process the simulation results</li>
          </ul>
          <p class="text-primary">{{i18next.t("otherProjectsText")}}:</p>
        </div>
        <div class="imageContainer mt-5">
          <div class="project-image project-img-1" style="background-image: url('../static/images/taste-cnn.png')"
            onclick="projectRedirect('/projects/taste-cnn')">
          </div>

          <div class="project-image project-img-2" style="background-image: url('../static/images/cfd-probe.png')"
            onclick="projectRedirect('/projects/cfd-probe')">
          </div>

          <div class="project-image project-img-3" style="background-image: url('../static/images/climbx.png')"
            onclick="projectRedirect('/projects/climbx')">
          </div>
        </div>
        </div>
        </div>
    `,
});
new Vue({ el: "#tes" });
