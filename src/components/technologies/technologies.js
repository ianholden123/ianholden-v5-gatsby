import React from 'react'
import Icon from '../icons'
import StyledTechnologies from './styledTechnologies'

const Technology = ({ icon, name }) => (
  <div className='grid-panel'>
    <Icon name={icon} classes='icon-small block-center' />
    <p className='text-center'>{name}</p>
  </div>
)

const TechnologiesComponent = () => (
  <StyledTechnologies className='my-5'>
    <h2 className='mt-6 px-4 block-center text-center'>Technologies</h2>
    <h3 className='px-4 not-full-width block-center'>I am most experienced with:</h3>
    <div className='technologies block-center not-full-width'>
      <Technology icon='css3' name='CSS3' />
      <Technology icon='html5' name='HTML5' />
      <Technology icon='javascript' name='JavaScript' />
      <Technology icon='nextjs' name='Next.js' />
      <Technology icon='node' name='Node.js' />
      <Technology icon='react' name='React' />
    </div>
    <h3 className='mt-3 px-4 not-full-width block-center'>I also have experience with:</h3>
    <div className='technologies block-center not-full-width'>
      <Technology icon='gatsby' name='Gatsby' />
      <Technology icon='git' name='Git' />
      <Technology icon='ionic' name='Ionic' />
      <Technology icon='jest' name='Jest' />
      <Technology icon='jquery' name='jQuery' />
      <Technology icon='mysql' name='MySQL' />
      <Technology icon='php' name='PHP' />
      <Technology icon='sass' name='Sass' />
      <Technology icon='storybook' name='Storybook' />
      <Technology icon='tailwindcss' name='Tailwind CSS' />
      <Technology icon='typescript' name='TypeScript' />
      <Technology icon='wordpress' name='WordPress' />
    </div>
  </StyledTechnologies>
)

export default TechnologiesComponent
