import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AppDev from './svg/appDev.js'
import AWS from './svg/aws.js'
import Bootstrap from './svg/bootstrap.js'
import Category from './svg/category.js'
import CSS3 from './svg/css3.js'
import Docker from './svg/docker.js'
import ExternalLink from './svg/externalLink.js'
import Gatsby from './svg/gatsby.js'
import Git from './svg/git.js'
import GitHub from './svg/github.js'
import Gulp from './svg/gulp.js'
import Handlebars from './svg/handlebars.js'
import Html5 from './svg/html5.js'
import Illustrator from './svg/illustrator.js'
import Ionic from './svg/ionic.js'
import JavaScript from './svg/javascript.js'
import JQuery from './svg/jQuery.js'
import MySQL from './svg/mysql.js'
import Node from './svg/node.js'
import Photoshop from './svg/photoshop.js'
import PHP from './svg/php.js'
import ReactIcon from './svg/react.js'
import Sass from './svg/sass.js'
import SEO from './svg/seo.js'
import Tag from './svg/tag.js'
import Typescript from './svg/typescript.js'
import WebDev from './svg/webDev.js'
import WordPress from './svg/wordpress.js'

const tidy = string => string.toLowerCase().trim()

const getIcon = name => {
  switch (tidy(name)) {
    case 'appdev': return <AppDev />
    case 'aws': return <AWS />
    case 'bootstrap': return <Bootstrap />
    case 'category': return <Category />
    case 'css3': return <CSS3 />
    case 'docker': return <Docker />
    case 'externallink': return <ExternalLink />
    case 'gatsby': return <Gatsby />
    case 'git': return <Git />
    case 'github': return <GitHub />
    case 'gulp': return <Gulp />
    case 'handlebars': return <Handlebars />
    case 'html5': return <Html5 />
    case 'illustrator': return <Illustrator />
    case 'ionic': return <Ionic />
    case 'javascript': return <JavaScript />
    case 'jquery': return <JQuery />
    case 'mysql': return <MySQL />
    case 'node': return <Node />
    case 'photoshop': return <Photoshop />
    case 'php': return <PHP />
    case 'react': return <ReactIcon />
    case 'sass': return <Sass />
    case 'seo': return <SEO />
    case 'tag': return <Tag />
    case 'typescript': return <Typescript />
    case 'webdev': return <WebDev />
    case 'wordpress': return <WordPress />
    default: return ''
  }
}

const Icons = ({
  name,
  classes
}) => (
  <div id={`${tidy(name)}-logo-icon`} className={classNames('icon', classes)}>
    {getIcon(tidy(name))}
  </div>
)

Icons.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.string
}

export default Icons
