import React, { useRef, useEffect } from 'react'
import { Link } from 'gatsby'

const ProjectTile = ({
  id,
  logo,
  portraitImage,
  setRectangle,
  title,
  uri
}) => {
  const imgElement = useRef(null)

  useEffect(() => {
    window.addEventListener('resize', () => setRectangle(imgElement.current.clientHeight))
  }, [])
  
  return (
    <div className='hsItem text-center' key={id}>
      <Link to={uri}>
        { portraitImage?.sourceUrl &&
          <>
            <img
              alt={portraitImage?.altText}
              onLoad={() => { setRectangle(imgElement.current.clientHeight)}}
              ref={imgElement}
              src={portraitImage?.sourceUrl}
            />

            { logo?.sourceUrl &&
              <img className='logo' src={logo?.sourceUrl} alt={logo?.altText} />
            }
          </>
        }
        <h3 className='f5 capitalize py-3 px-4' dangerouslySetInnerHTML={{ __html: title }} />
      </Link>
    </div>
  )
}

export default ProjectTile
