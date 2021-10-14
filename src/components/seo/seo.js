import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { htmlDecode } from '../../utils'
 
 function SEO ({ description, lang, meta, title, pathName }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
             siteUrl
           }
         }
       }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const canonical = pathName ? `${site.siteMetadata.siteUrl}${pathName}` : null
 
   return (
     <Helmet
       htmlAttributes={{
         lang
       }}
       title={htmlDecode(title)}
       defaultTitle='Ian Holden | Software Engineer'
       titleTemplate={'%s'}
       link={ canonical ? [{ rel: 'canonical', href: canonical }] : [] }
       meta={[
         {
           name: 'description',
           content: htmlDecode(metaDescription)
         },
         {
           property: 'og:title',
           content: title
         },
         {
           property: 'og:description',
           content: htmlDecode(metaDescription)
         },
         {
           property: 'og:type',
           content: 'website'
         },
         {
           property: 'og:image',
           content: 'https://ianholden.co.uk/static/ian-83944bc1fc683bc42c08a861ce86c89d.jpg'
         },
         {
           name: 'twitter:card',
           content: 'summary'
         },
         {
           name: 'twitter:creator',
           content: site.siteMetadata.author
         },
         {
           name: 'twitter:title',
           content: title
         },
         {
           name: 'twitter:description',
           content: htmlDecode(metaDescription)
         }
       ].concat(meta)}
     />
   )
 }
 
 SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
}

 export default SEO
 