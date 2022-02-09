Vue.component("experiences", {
  template: `
        <div>
        <h3>{{i18next.t("experiencesText")}}</h3>
        <hr class="divider">
        <p style="margin: 0;">Practical Experience</p>
        <div class="experience-box">
            <div class="row">
                <div class="job-pic-column" style="text-align: center;"> <img src="static/images/LEC_logo.jpg"></div>
                <div class="job-dis-column">
                    <h2> Master Thesis</h2> <a href="https://lec.ethz.ch/" target="blank_" class="text-decoration-none">
                        <h5 class="text-primary">Laboratory for Energy Conversion (LEC), ETH Zürich </h5>
                    </a> <small class="text-secondary">March 2021 - {{i18next.t("presentText")}}</small>
                    <p> <strong>Title: </strong><u>Improved Learning of Agents from Previous Travel Experience</u><br>
                    Improved the learning of the agents in 
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S1569190X19300267?via%3Dihub" target="blank_"> GEMSim (GPU Enhanced Mobility Simulation) </a> 
                    <br>The new additions were written in C++, CUDA and Python<br>
                    Accomplishments:<br>
                    • Added a congestion-based agent selection algorithm that led to a 20% improvement in the convergence speed<br>
                    • Implemented a Machine Learning model (Neural Network), using PyTorch, to integrate the agent’s attributes (age, income etc.) and trip data (travel distance) in the agent’s decision-making <br> 
                    • Implemented a delay-based time mutation strategy, which led to an improvement in the agent’s overall performance  </p>
                </div>
            </div>
            <hr class="dark-mode-divider">
            <div class="row">
                <div class="job-pic-column" style="text-align: center;"> <img src="static/images/LEC_logo.jpg"></div>
                <div class="job-dis-column">
                    <h2> Help Assistant</h2> <a href="https://lec.ethz.ch/" target="blank_" class="text-decoration-none">
                    <h5 class="text-primary">Laboratory for Energy Conversion (LEC), ETH Zürich </h5>
                    </a> <small class="text-secondary">Feb 2021 - May 2021</small>
                    <p> • Benchmarked the capabilities of 
                    <a href="https://lec.ethz.ch/research/enerpol.html" target="blank_">EnerPol </a> <br>
                </div>
            </div>
            <hr class="dark-mode-divider">
            <div class="row">
                <div class="job-pic-column" style="text-align: center;"> <img src="static/images/GE_logo.png" class="w-100"></div>
                <div class="job-dis-column">
                    <h2> Intern</h2>
                    <h5 class="text-primary"><a href="https://www.ge.com/power" target="blank_"> GE Power, Baden</a></h5> 
                    <small class="text-secondary">June 2020 - Jan 2021</small>
                    <p> 
                    • Successfully implemented a new and improved method in estimating the performance and cost of a Steam Turbine using MATLAB <br> 
                    • Integrated real GE Steam Turbine data to the performance and cost estimation tool <br> 
                    • Assisted in incorporating new additions in the Combined Cycle Power Plant performance and cost estimation tool <br>
                    • Developed a new file communication tool using Excel/VBA</p>
                </div>
            </div>
        </div>
        </div>
    `,
});
new Vue({ el: "#experiences" });
