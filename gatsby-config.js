module.exports = {
  siteMetadata: {
    title: 'Keebs page',
    description: 'Clickity clack.',
    author: {
      name: 'Ondrej Kinst',
      url: 'https://github.com/toaster192',
      email: 'toastercz@gmail.com'
    },
    siteUrl: 'https://toaster.name'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
    siteUrl: 'https://toaster.name'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-6WF0EECH06'
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet'
  ]
}
