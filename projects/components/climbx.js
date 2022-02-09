Vue.component("climbx", {
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
            <img class="d-block w-100" src="../static/images/projects/climbx-1.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../static/images/projects/climbx-2.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../static/images/projects/climbx-3.jpg" alt="Second slide">
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
          <h1 class="display-4">ClimbX</h1>
          <p class="lead">Successfully designed (from conceptualization to prototype testing) a purely mechanical, packable wire cutter with the following functionality: 
          <br>
          • Climb a pole of height of up to 6 meters<br>
          • Cut the transmission line at that height while being operated from the ground<br>
          </p>
          <p class="lead">Software used to design and analyse the system:</p>
          <ul class="list-group">
            <li class="list-group-item bg-transparent"><strong>Solidworks</strong> - Model the system and prepare technical drawings for manufacturing</li>
            <li class="list-group-item bg-transparent"><strong>Ansys Mechanical</strong> - Analyse the structure (stress and deformations) of the system</li>
            <li class="list-group-item bg-transparent"><strong>Adams</strong> - Analyse the dynamics of the moving parts of the system</li>
          </ul>
          <p class="text-primary">{{i18next.t("otherProjectsText")}}:</p>
        </div>
        <div class="imageContainer mt-5">
          <div class="project-image project-img-1" style="background-image: url('../static/images/POS_egzoni.png')"
            onclick="projectRedirect('/projects/pos-soft')">
          </div>

          <div class="project-image project-img-2" style="background-image: url('../static/images/sorting-visualizer1.webp')"
            onclick="projectRedirect('/projects/sorting-visualizer')">
          </div>

          <div class="project-image project-img-3" style="background-image: url('../static/images/cfd-probe.png')"
            onclick="projectRedirect('/projects/cfd-probe')">
          </div>
        </div>
      </div>
        </div>
    `,
});
new Vue({ el: "#climbx" });
