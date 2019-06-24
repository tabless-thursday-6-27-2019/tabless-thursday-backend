const db = require('../database/dbConfig')

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
}

function insert(game) {
    return db('tabs')
    .insert(game, 'id')
    .then(ids => {
        return db('tabs')
        .where({ id: ids[0] })
        .first()
    })
}

async function update(id, changes) {
    return undefined;
}

function remove(game) {
    return db('tabs')
    .del(game, 'id')
}

function getAll() {
    return db('tabs')
}

function findById(id) {
    return db('tabs')
    .findById(tab, 'id')
    .then(ids => {
        return db('tabs')
        .then(ids => {
            return db('tabs')
            .where({ id: ids[0] })
            .first()
        })
    })
}