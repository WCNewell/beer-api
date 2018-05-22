const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

const queries = require('../db/queries')

router.get('/', (req, res) => {
    queries.getAllBeers()
        .then(beers => {
            res.json(beers)
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    queries.getOneBeer(id)
        .then(beer => {
            res.json({
                beer: beer
            })
        })
})

router.post('/', (req, res, next) => {
    const body = req.body

    knex('ipas')
        .insert(body)
        .returning('*')
        .then(beer => {
            res.json({
                posted: beer[0]
            })
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    knex('ipas')
        .where('id', id)
        .del()
        .returning('*')
        .then(beer => {
            res.json({
                deleted: beer
            })
        })
})

router.put('/:id', (req, res) => {
    queries
        .updateOneBeer(req.params.id, req.body)
        .then(beer => {
            res.json({ updated: beer[0] })
        })
})

module.exports = router