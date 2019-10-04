import React from "react"

import ProjectComponent from "./project"

const ProjectWrapperComponent = () => (
    <div id="projectsWrapper">
        <h2>Web Projects</h2>
        <ProjectComponent 
            projectLink="https://www.philippines-schools-project.org/"
            projectName="Philippines Schools Project"
            imageSrc="./assets/philippines.png"
            imageAlt="Philippines Schools Project logo"
        />
        <ProjectComponent 
            projectLink="https://onlinegames-byninalazina.com/snakes-and-ladders-times-table/"
            projectName="Snakes and Ladders - Times Table Game"
            imageSrc="./assets/snakesAndLadders.png"
            imageAlt="Online snakes and ladders times table game"
        />
        <ProjectComponent
            projectName="NetDirector Vision"
            imageSrc="./assets/netdirectorVision.png"
            imageAlt="NetDirector Vision logo"
        />
        <ProjectComponent 
            projectLink="https://threedimensionalfitness.co.uk/"
            projectName="3Dimensional Fitness"
            imageSrc="./assets/3DFitness.png"
            imageAlt="Three dimensional fitness logo"
        />
    </div>
)

export default ProjectWrapperComponent
