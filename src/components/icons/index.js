import React from 'react'
import classNames from 'classnames'

import Bootstrap from './svg/bootstrap.js'
import Category from './svg/category.js'
import Css3 from './svg/css3.js'
import Docker from './svg/docker.js'
import Email from './svg/email.js'
import ExternalLink from './svg/externalLink.js'
import Gatsby from './svg/gatsby.js'
import Git from './svg/git.js'
import GitHub from './svg/github.js'
import Html5 from './svg/html5.js'
import Ionic from './svg/ionic.js'
import JavaScript from './svg/javascript.js'
import Jest from './svg/jest.js'
import JQuery from './svg/jQuery.js'
import LinkedIn from './svg/linkedIn.js'
import Markdown from './svg/markdown.js'
import MySQL from './svg/mysql.js'
import NextJs from './svg/nextJs.js'
import Node from './svg/node.js'
import Php from './svg/php.js'
import ReactIcon from './svg/react.js'
import Sass from './svg/sass.js'
import Storybook from './svg/storybook.js'
import Tag from './svg/tag.js'
import TailwindCss from './svg/tailwindCss.js'
import Typescript from './svg/typescript.js'
import WordPress from './svg/wordpress.js'

const tidy = (string) => string.toLowerCase().trim()

const getIcon = (name, color = '#494949') => {
  switch (tidy(name)) {
    case 'bootstrap':
      return <Bootstrap color={color} />
    case 'category':
      return <Category color={color} />
    case 'css3':
      return <Css3 color={color} />
    case 'dev':
      return <Dev color={color} />
    case 'docker':
      return <Docker color={color} />
    case 'email':
      return <Email color={color} />
    case 'externallink':
      return <ExternalLink color={color} />
    case 'gatsby':
      return <Gatsby color={color} />
    case 'git':
      return <Git color={color} />
    case 'github':
      return <GitHub color={color} />
    case 'html5':
      return <Html5 color={color} />
    case 'ionic':
      return <Ionic color={color} />
    case 'javascript':
      return <JavaScript color={color} />
    case 'jest':
      return <Jest color={color} />
    case 'jquery':
      return <JQuery color={color} />
    case 'linkedin':
      return <LinkedIn color={color} />
    case 'markdown':
      return <Markdown color={color} />
    case 'mysql':
      return <MySQL color={color} />
    case 'nextjs':
      return <NextJs color={color} />
    case 'node':
      return <Node color={color} />
    case 'php':
      return <Php color={color} />
    case 'react':
      return <ReactIcon color={color} />
    case 'sass':
      return <Sass color={color} />
    case 'tag':
      return <Tag color={color} />
    case 'storybook':
      return <Storybook color={color} />
    case 'tailwindcss':
      return <TailwindCss color={color} />
    case 'typescript':
      return <Typescript color={color} />
    case 'wordpress':
      return <WordPress color={color} />
    default:
      return ''
  }
}

const Icons = ({ name, classes, color }) => (
  <div id={`${tidy(name)}-logo-icon`} className={classNames('icon', classes)}>
    {getIcon(tidy(name), color)}
  </div>
)

export default Icons
