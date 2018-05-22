const knex = require('./connection')

function getAllBeers() {
    return knex('ipas')
}

function getOneBeer(id) {
    return knex('ipas')
        .where('id', id)
}

function addOneBeer() {

}

function deleteOneBeer() {

}

function updateOneBeer(id, body) {
    return knex('ipas')
        .where('id', id)
        .update(body)
        .returning('*')
}

module.exports = {
    getAllBeers,
    getOneBeer,
    addOneBeer,
    deleteOneBeer,
    updateOneBeer
}