module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/beers-db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
