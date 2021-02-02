import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

const BlankProjectTile = ({ uri, text, heightPx }) => (
  <div
    style={{ height: !!heightPx && `${heightPx}px` }}
    className={classNames('hsItem text-center blank', uri && 'link')}
  >
    <Link to={uri}>
      <p className='f-3 capitalize py-3 px-4 uppercase'>{text}</p>
    </Link>
  </div>
)

export default BlankProjectTile
