module.exports = {
  siteMetadata: {
    title: 'Ian Holden',
    description:
      'Ian Holden is a Software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project.',
    author: 'Ian Holden',
    siteUrl: 'https://ianholden.co.uk'
  },
  pathPrefix: '',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: 'http://ianholdenv5wordpress.local/graphql'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ian-holden',
        short_name: 'Ian Holden',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/images/icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Chivo:Regular 400',
          'Overpass:Regular 400,Regular 400 italic,Extra-light 200'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-36059287-1',
        respectDNT: true
      }
    },
    'gatsby-plugin-sitemap'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
}
