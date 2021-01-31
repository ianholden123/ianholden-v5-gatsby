import React from 'react'
import { Link } from 'gatsby'

const ProjectTile = ({
  id,
  logo,
  portraitImage,
  title,
  uri
}) => (
  <div className='hsItem text-center' key={id}>
    <Link to={uri}>
      { portraitImage?.sourceUrl &&
        <>
          <img src={portraitImage?.sourceUrl} alt={portraitImage?.altText} />

          { logo?.sourceUrl &&
            <img className='logo' src={logo?.sourceUrl} alt={logo?.altText} />
          }
        </>
      }
      <h3 className='f5 capitalize py-3 px-4' dangerouslySetInnerHTML={{ __html: title }} />
    </Link>
  </div>
)

export default ProjectTile
