Vue.component("taste-cnn", {
  template: `
        <div>
        <a id="home"><i class="fa fa-home" aria-hidden="true"></i></a>
        <span class="fas fa-sun position-fixed text-warning" onclick="darkModeToggle()" id="sun"></span>
        <span class="fas fa-moon position-fixed text-warning" onclick="darkModeToggle()" id="moon"></span>
        <div id="carouselExampleIndicators" class="carousel slide my-3" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        </ol>
        <div class="carousel-inner container">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../static/images/projects/cnn-1.png" alt="First slide">
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
            <h1 class="display-4">Taste Similarity Determination Network</h1>
            <p class="lead">Developed a Network to determine the similarity in taste between three different dishes.<br>
            The network takes as input the images of the three dishes, which are passed through a pre-trained ResNet-50 Network,
            and the embeddings for each of the dishes (images) are obtained. The embeddings are then taken as input for the Linear
            Network, where the similarity in taste between the dishes is determined. The Network was trained with around 10000 different
            dishes (images), and a validation accuracy of around 85% was obtained.
            </p>
            
            <p class="lead">The technologies used in this project are:</p>
            <ul class="list-group">
                <li class="list-group-item bg-transparent"><strong>Python</strong> - Handle the project logic</li>
                <li class="list-group-item bg-transparent"><strong>Pillow</strong> - Import and pre-process the images</li>
                <li class="list-group-item bg-transparent"><strong>PyTorch</strong> - Build and train the network</li>
            </ul>
            <p class="text-primary">{{i18next.t("otherProjectsText")}}:</p>
            </div>
            <div class="imageContainer mt-5">
            <div class="project-image project-img-1" style="background-image: url('../static/images/POS_egzoni.png')"
                onclick="projectRedirect('/projects/pos-soft')">
            </div>

            <div class="project-image project-img-2" style="background-image: url('../static/images/climbx.PNG')"
                onclick="projectRedirect('/projects/climbx')">
            </div>

            <div class="project-image project-img-3" style="background-image: url('../static/images/sorting-visualizer1.webp')"
                onclick="projectRedirect('/projects/sorting-visualizer')">
            </div>
            </div>
        </div>
        </div>
    `,
});
new Vue({ el: "#taste-cnn" });
