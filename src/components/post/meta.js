import React from 'react'
import Icon from '../icons'
import classNames from 'classnames'

const MetaComponent = ({ categories, date, modified, tags }) => {
  const renderDate = ({ date, modified }) => {
    const publishedDate = modified || date
    if (!publishedDate) return <></>

    const dateString = new Date(publishedDate).toLocaleDateString('en-gb', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    const dateISOString = new Date(publishedDate).toISOString()

    return (
      <ul className={classNames('dates inline-block m-0 mb-3 mr-4 ml-0')}>
        <li
          className="m-0 inline"
          itemProp="datePublished"
          content={publishedDate}
        >
          {date && (
            <>
              Published on <time dateTime={dateISOString}>{dateString}</time>
            </>
          )}
        </li>
      </ul>
    )
  }

  const renderCategories = (categories) => {
    if (!Array.isArray(categories)) return <></>
    return (
      <ul className="category inline-block m-0 mb-3 mr-4 ml-0">
        <Icon name="category" classes="icon-tiny inline-block mr-2" />
        {categories.map((category, index) => {
          return (
            <li key={index} className="m-0 capitalize inline">
              {category}
            </li>
          )
        })}
      </ul>
    )
  }

  const renderTags = (tags) => {
    if (!Array.isArray(tags)) return <></>
    return (
      <ul className="tags inline-block m-0 mb-3 mr-4 ml-0">
        <Icon name="tag" classes="icon-tiny inline-block mr-2" />
        {tags.map((tag, index) => {
          return (
            <li key={index} className="m-0 capitalize inline">
              {tag}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="meta f-6 mt-3">
      {renderDate({ date, modified })}
      {renderCategories(categories)}
      {renderTags(tags)}
    </div>
  )
}

export default MetaComponent
