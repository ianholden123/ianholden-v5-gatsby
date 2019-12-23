import React from "react"
// import { Link } from "gatsby"
import { getDateString } from "../utils/date"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const PostPage = ({
  pageContext
}) => {
  const {
    author,
    content,
    date_created,
    date_updated,
    excerpt,
    featured_image,
    title
  } = pageContext

  const dateCreated = new Date(date_created)
  const dateUpdated = new Date(date_updated)
  
  return (
    <Layout>
      <SEO
        title={`${title.text} | Blog | Ian Holden`}
        description={excerpt.text}
      />
      <h1 dangerouslySetInnerHTML={{__html: title.html}}></h1>
      <p>
        Written by {author} on {getDateString(dateCreated)}
        {date_updated && date_updated !== date_created && `. Updated on ${getDateString(dateUpdated)}`}
      </p>
      <img src={featured_image.url} alt={featured_image.alt} />
      <div dangerouslySetInnerHTML={{__html: content.html}} />
    </Layout>
  )
} 

export default PostPage
