// Set our environment
const environment = process.env.NODE_ENV || 'development'

// Use connection info from knexfile
const config = require('../knexfile')

// Coordinate the two above
const configEnv = config[environment]

// Bring in knex library
const knex = require('knex')

// Put it all together
const connection = knex(configEnv)

module.exports = connection