import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Icon from '../components/icons'
import ContactComponent from '../components/contact/contact'
import './about.css'

const outputTechnology = (icon, name) => (
  <div className='grid-panel'>
    <Icon name={icon} classes='icon-small block-center' />
    <p className='text-center'>{name}</p>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO
      title='About Me | Software Engineer | Ian Holden'
      description='Ian Holden is a software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project.'
    />
    <article id='aboutWrapper' className='block-center py-6'>
      <h1 className='not-full-width block-center px-4'>About Me</h1>
      <div id='general-info' className='grid'>
        <div id='ian-image' className='grid-panel' />
        <div className='grid-panel not-full-width px-4'>
          <h2 className='mb-3'>My name is Ian Holden.</h2>
          <h3>I&apos;m a Software Engineer.</h3>
          <p>I started my professional career as an Optimisation Executive after completing my degree in Computer Science.</p>
          <p>I gained skills, working with in-house and external Analytics tools before joining a small Research &amp; Development team. As an R&amp;D Engineer, I built hybrid applications using Ionic with Angular.</p>
          <p>I am currently working as a Software Engineer, developing frontend systems and managing integrations within a microservices architecture.</p>
        </div>
      </div>
      <h2 className='mt-6 px-4 not-full-width block-center'>Technologies that I have experience with</h2>
      <div id='technologies' className='grid not-full-width'>
        { outputTechnology('aws', 'AWS') }
        { outputTechnology('css3', 'CSS3') }
        { outputTechnology('gatsby', 'Gatsby') }
        { outputTechnology('git', 'Git') }
        { outputTechnology('handlebars', 'Handlebars') }
        { outputTechnology('html5', 'HTML5') }
        { outputTechnology('illustrator', 'Illustrator') }
        { outputTechnology('ionic', 'Ionic') }
        { outputTechnology('javascript', 'Javascript') }
        { outputTechnology('jquery', 'jQuery') }
        { outputTechnology('mysql', 'MySQL') }
        { outputTechnology('node', 'Node.js') }
        { outputTechnology('photoshop', 'Photoshop') }
        { outputTechnology('php', 'PHP') }
        { outputTechnology('react', 'React') }
        { outputTechnology('sass', 'Sass') }
        { outputTechnology('typescript', 'Typescript') }
        { outputTechnology('wordpress', 'WordPress') }
      </div>

      <ContactComponent />
    </article>
  </Layout>
)

export default IndexPage
