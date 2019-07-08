const path = require('path')

module.exports = {
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: path.join(__dirname, 'src', 'images'),
    },
  }, {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['DM Sans']
      }
    }
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-plugin-react-helmet',
]}
