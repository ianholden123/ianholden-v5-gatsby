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
        { portraitImage?.src &&
          <>
            <img
              alt={portraitImage?.alt}
              onLoad={() => { setRectangle(imgElement.current.clientHeight)}}
              ref={imgElement}
              src={portraitImage.src}
            />

            { logo?.src &&
              <img className='logo' src={logo?.src} alt={logo?.alt} />
            }
          </>
        }
        <h3 className='f5 capitalize py-3 px-4' dangerouslySetInnerHTML={{ __html: title }} />
      </Link>
    </div>
  )
}

export default ProjectTile
