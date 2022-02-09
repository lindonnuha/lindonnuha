Vue.component("pos-soft", {
  template: `
        <div>
        <a id="home"><i class="fa fa-home" aria-hidden="true"></i></a>
        <span class="fas fa-sun position-fixed text-warning" onclick="darkModeToggle()" id="sun"></span>
        <span class="fas fa-moon position-fixed text-warning" onclick="darkModeToggle()" id="moon"></span>
        <div id="carouselExampleIndicators" class="carousel slide my-3" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
        </ol>
        <div class="carousel-inner container">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../static/images/projects/POS-1.png" alt="First slide">
          </div>
          <div class="carousel-item">
          <img class="d-block w-100" src="../static/images/projects/POS-2.png" alt="Second slide">
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
          <h1 class="display-4">Retail Management Software</h1>
          <p class="lead">Currently developing a Retail Management Software for a local retail store. <br>
          The tool's capabilities are as follows:<br>
          • Record incoming and outgoing sales<br>
          • Generate sale receipts<br> 
          • Keep track and manage the inventory <br>
          • Run reporting and analytics on sales, inventory, etc.<br>
          • etc. <br>
          </p>
          <p class="lead">The technologies that were used in developing the software:</p>
          <ul class="list-group">
            <li class="list-group-item bg-transparent"><strong>Python</strong> - Handle the software logic/functionality</li>
            <li class="list-group-item bg-transparent"><strong>Qt</strong> - Build the GUI (Graphical User Interface)</li>
            <li class="list-group-item bg-transparent"><strong>SQLite</strong> - Manage the database</li>
          </ul>
          <p class="text-primary">{{i18next.t("otherProjectsText")}}:</p>
        </div>
        <div class="imageContainer mt-5">
          <div class="project-image project-img-1" style="background-image: url('../static/images/cfd-probe.png')"
            onclick="projectRedirect('/projects/cfd-probe')">
          </div>

          <div class="project-image project-img-2" style="background-image: url('../static/images/climbx.png')"
            onclick="projectRedirect('/projects/climbx')">
          </div>

          <div class="project-image project-img-3" style="background-image: url('../static/images/tes.jpg')"
            onclick="projectRedirect('/projects/tes')">
          </div>
        </div>
      </div>
    </div>
    `,
});
new Vue({ el: "#pos-soft" });
