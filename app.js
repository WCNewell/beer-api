const express = require('express')
const app = express()
const knex = require('./db/connection')

const bodyParser = require('body-parser')
// The above is middleware required for parsing POST requests

// Require route files
const beers = require('./routes/beers')

// The below needs to be above routes
app.use(bodyParser.json())
app.use('/beers', beers)

// app.get('/', (req, res) => res.send('Hello World!'))

// app.get('/beers', (req, res) => {
//     knex('ipas')
//     .then(beers => {
//         res.json(beers)
//     })
// })

// app.get('/beers/:id', (req, res) => {
//     const id = req.params.id
//     knex('ipas')
//         .where('id', id)
//         .first()
//         .then(beer => {
//             res.json({ beer: beer })
//     })
// })

// app.post('/beers', (req, res, next) => {
//     const body = req.body
     
//     knex('ipas')
//         .insert(body)
//         .returning('*')
//         .then(beer => {
//             res.json({ posted: beer[0] })
//         })
// })

// app.delete('/beers/:id', (req, res) => {
//     const id = req.params.id

//     knex('ipas')
//     .where('id', id)
//     .del()
//     .returning('*')
//     .then(beer => {
//         res.json({ deleted: beer })
//     })
// })

// app.put('/beers/:id', (req, res) => {
//     const id = req.params.id
//     const body = req.body

//     knex('ipas')
//     .where('id', id)
//     .update(body)
//     .returning('*')
//     .then(beer => {
//         res.json({ updated: beer[0] })
//     })
// })

app.listen(3000, () => console.log('Example app listening on port 3000!'));

