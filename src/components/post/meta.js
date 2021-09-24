import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Icon from '../icons'
import classNames from 'classnames'

const MetaComponent = ({ author, categories, date, isPostArchive, modified, tags }) => {
  const renderAuthor = (author) => {
    const data = useStaticQuery(graphql`
      query {
        image: file(relativePath: { eq: "ianHeadshot.jpg" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)

    return author && (
      <ul className='author flex flex-v-middle ml-0 mr-4 mb-3 mt-3' itemProp="author" itemScope itemType="http://schema.org/Person">
        <li className="m-0 mr-3 inline"><Link to='/about'><Img fixed={data.image.childImageSharp.fixed} alt='Ian Holden' /></Link></li>
        <li className="m-0 inline">Written by <span itemProp="name"><Link to='/about'>{author}</Link></span></li>
      </ul>
    )
  }

  const renderDate = ({ date, modified }) => {
    const publishedDate = modified || date
    if (publishedDate) {
      const formattedDate = new Date(publishedDate).toDateString()
      return (
        <ul className={classNames('dates inline-block m-0 mb-3 mr-4 ml-0')}>
          <li className="m-0 inline" itemProp="datePublished" content={publishedDate}>
            { date && (`Published on ${formattedDate}`)}
          </li>
        </ul>
      )
    }
    return ''
  }

  const renderCategories = categories => {
    if (!Array.isArray(categories)) return ''
    return (
      <ul className='category inline-block m-0 mb-3 mr-4 ml-0'>
        <Icon name='category' classes='icon-tiny inline-block mr-2' />
        {categories.map((category, index) => {
          return (<li key={index} className='m-0 capitalize inline'>{category}</li>)
        })}
      </ul>
    )
  }

  const renderTags = tags => {
    if (!Array.isArray(tags)) return ''
    return (
      <ul className='tags inline-block m-0 mb-3 mr-4 ml-0'>
        <Icon name='tag' classes='icon-tiny inline-block mr-2' />
        {tags.map((tag, index) => {
          return (<li key={index} className='m-0 capitalize inline'>{tag}</li>)
        })}
      </ul>
    )
  }

  return (
    <div className="meta f-6">
      {renderDate({ date, modified })}
      {renderCategories(categories)}
      {renderTags(tags)}
      {!isPostArchive && renderAuthor(author)}
    </div>
  )
}

export default MetaComponent
