import React from 'react'
import classNames from 'classnames'

import AppDev from './svg/appDev.js'
import Aws from './svg/aws.js'
import Bootstrap from './svg/bootstrap.js'
import Category from './svg/category.js'
import Css3 from './svg/css3.js'
import Dev from './svg/dev.js'
import Docker from './svg/docker.js'
import Email from './svg/email.js'
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
import LinkedIn from './svg/linkedIn.js'
import MySQL from './svg/mysql.js'
import Node from './svg/node.js'
import Photoshop from './svg/photoshop.js'
import Php from './svg/php.js'
import ReactIcon from './svg/react.js'
import Sass from './svg/sass.js'
import Seo from './svg/seo.js'
import Tag from './svg/tag.js'
import Twitter from './svg/twitter.js'
import Typescript from './svg/typescript.js'
import WebDev from './svg/webDev.js'
import WordPress from './svg/wordpress.js'

const tidy = string => string.toLowerCase().trim()

const getIcon = (name, color = '#494949') => {
  switch (tidy(name)) {
    case 'appdev': return <AppDev color={color} />
    case 'aws': return <Aws color={color} />
    case 'bootstrap': return <Bootstrap color={color} />
    case 'category': return <Category color={color} />
    case 'css3': return <Css3 color={color} />
    case 'dev': return <Dev color={color} />
    case 'docker': return <Docker color={color} />
    case 'email': return <Email color={color} />
    case 'externallink': return <ExternalLink color={color} />
    case 'gatsby': return <Gatsby color={color} />
    case 'git': return <Git color={color} />
    case 'github': return <GitHub color={color} />
    case 'gulp': return <Gulp color={color} />
    case 'handlebars': return <Handlebars color={color} />
    case 'html5': return <Html5 color={color} />
    case 'illustrator': return <Illustrator color={color} />
    case 'ionic': return <Ionic color={color} />
    case 'javascript': return <JavaScript color={color} />
    case 'jquery': return <JQuery color={color} />
    case 'linkedin': return <LinkedIn color={color} />
    case 'mysql': return <MySQL color={color} />
    case 'node': return <Node color={color} />
    case 'photoshop': return <Photoshop color={color} />
    case 'php': return <Php color={color} />
    case 'react': return <ReactIcon color={color} />
    case 'sass': return <Sass color={color} />
    case 'seo': return <Seo color={color} />
    case 'tag': return <Tag color={color} />
    case 'twitter': return <Twitter color={color} />
    case 'typescript': return <Typescript color={color} />
    case 'webdev': return <WebDev color={color} />
    case 'wordpress': return <WordPress color={color} />
    default: return ''
  }
}

const Icons = ({
  name,
  classes,
  color
}) => (
  <div id={`${tidy(name)}-logo-icon`} className={classNames('icon', classes)}>
    {getIcon(tidy(name), color)}
  </div>
)

export default Icons
