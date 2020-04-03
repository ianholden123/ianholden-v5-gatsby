import React from 'react'
import philippinesImage from '../../images/philippines.png'
import snakesAndLaddersImage from '../../images/snakesAndLadders.png'
import netdirectorVisionImage from '../../images/netdirectorVision.png'
import FitnessImage from '../../images/3DFitness.png'
import ProjectComponent from './project'

const ProjectWrapperComponent = () => (
  <article id='projectsWrapper' className='px-0 m-0 py-5'>
    <h2 className='text-center'>Web Projects</h2>
    <div className='horizontalScroll'>
      <ProjectComponent
        projectLink='https://www.philippines-schools-project.org/'
        projectName='Philippines Schools Project'
        imageSrc={philippinesImage}
        imageAlt='Philippines Schools Project logo'
      />
      <ProjectComponent
        projectLink='https://onlinegames-byninalazina.com/snakes-and-ladders-times-table/'
        projectName='Snakes and Ladders - Times Table Game'
        imageSrc={snakesAndLaddersImage}
        imageAlt='Online snakes and ladders times table game'
      />
      <ProjectComponent
        projectName='NetDirector Vision'
        imageSrc={netdirectorVisionImage}
        imageAlt='NetDirector Vision logo'
      />
      <ProjectComponent
        projectLink='https://threedimensionalfitness.co.uk/'
        projectName='3Dimensional Fitness'
        imageSrc={FitnessImage}
        imageAlt='Three dimensional fitness logo'
      />
    </div>
  </article>
)

export default ProjectWrapperComponent
