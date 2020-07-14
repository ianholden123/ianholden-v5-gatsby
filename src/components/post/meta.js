import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import moment from 'moment'
import Icon from '../icons'
import { createLocalLink } from '../../utils'
import classNames from 'classnames'

const MetaComponent = ({ author, date, dateOverride, modified, categories, tags }) => {
  // const renderAuthor = (author) => {
  //   const fullName = author && `${author.firstName} ${author.lastName}`

  //   return fullName && (
  //     <ul className='author ml-0'>
  //       <li className="m-0 inline">Written by {fullName}</li>
  //     </ul>
  //   )
  // }

  const renderDate = ({ date, modified }) => {
    if (date || modified) {
      // Only deem as modified if modification has happened more than 7 days of publish date
      const hasBeenModified = moment(date).diff(moment(modified), 'days') < -7

      return (
        <ul className={classNames('meta inline-block m-0 mb-3 mr-4 ml-0')}>
          { dateOverride &&
            <li className="m-0 inline">
              Published {moment(dateOverride).format('MMMM Do YYYY')}
            </li>
          }
          {!dateOverride && !hasBeenModified && date && (
            <li className="m-0 inline">
              Published {moment(date).format('MMMM Do YYYY')}
            </li>
          )}
          {!dateOverride && hasBeenModified && modified && (
            <li className="m-0 inline">
              Updated {moment(modified).format('MMMM Do YYYY')}
            </li>
          )}
        </ul>
      )
    }
    return ''
  }

  const renderCategories = categories => {
    if (!categories) return ''
    const fetchedCategories = categories.nodes || categories.edges || []
    if (fetchedCategories.length === 0) return ''
    return (
      <ul className='category inline-block m-0 mb-3 mr-4 ml-0'>
        <Icon name='category' classes='icon-tiny inline-block mr-2' />
        {fetchedCategories.map(category => {
          const fetchedCategory = category.node || category
          const { name, uri, id } = fetchedCategory
          return (
            <li key={id} className='m-0 capitalize inline'>
              <Link to={`/blog/${createLocalLink(uri)}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
    )
  }

  const renderTags = tags => {
    if (!tags) return ''
    const fetchedTags = tags.nodes || tags.edges || []
    if (fetchedTags.length === 0) return ''
    return (
      <ul className='tags inline-block m-0 mb-3 mr-4 ml-0'>
        <Icon name='tag' classes='icon-tiny inline-block mr-2' />
        {fetchedTags.map(tag => {
          const fetchedTag = tag.node || tag
          const { name, uri, id } = fetchedTag
          return (
            <li key={id} className='m-0 capitalize inline'>
              <Link to={`/blog/${createLocalLink(uri)}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="meta f-6">
      {renderDate({ date, modified })}
      {renderCategories(categories)}
      {renderTags(tags)}
      {/* { !isPostArchive && renderAuthor(author)} */}
    </div>
  )
}

MetaComponent.propTypes = {
  isPostArchive: PropTypes.bool,
  author: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  date: PropTypes.string,
  dateOverride: PropTypes.string,
  modified: PropTypes.string,
  categories: PropTypes.oneOfType([
    PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string,
            uri: PropTypes.string
          })
        })
      )
    }),
    PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          uri: PropTypes.string
        })
      )
    })
  ]),
  tags: PropTypes.oneOfType([
    PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string,
            uri: PropTypes.string,
            id: PropTypes.string
          })
        })
      )
    }),
    PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          uri: PropTypes.string,
          id: PropTypes.string
        })
      )
    })
  ])
}

export default MetaComponent
